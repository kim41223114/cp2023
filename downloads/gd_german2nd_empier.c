#include <stdio.h>
#include <gd.h>

int main() {
    // 定義圖像的寬度和高度
    int width = 600;
    int height = 400;

    // 創建一個新的gd圖像
    gdImagePtr img = gdImageCreate(width, height);

    // 定義顏色
    int black = gdImageColorAllocate(img, 0, 0, 0);
    int white = gdImageColorAllocate(img, 255, 255, 255);
    int red = gdImageColorAllocate(img, 255, 0, 0);

    // 繪製國旗的三個橫條
    gdImageFilledRectangle(img, 0, 0, width, height / 3, black);
    gdImageFilledRectangle(img, 0, height / 3, width, 2 * height / 3, white);
    gdImageFilledRectangle(img, 0, 2 * height / 3, width, height, red);

    // 儲存圖像為gd檔案
    FILE *outfile = fopen("german_empire_flag.gd", "wb");
    gdImageGd(img, outfile);
    fclose(outfile);

    // 釋放圖像資源
    gdImageDestroy(img);

    return 0;
}
