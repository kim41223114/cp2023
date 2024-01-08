var tipuesearch = {"pages": [{'title': 'First', 'text': 'About \n  https://github.com/kim41223114/cp2023 \xa0(倉儲) \n', 'tags': '', 'url': 'First.html'}, {'title': 'W1~W3(登入並設定筆記作業網站之密碼)', 'text': '以下為開啟筆記編輯網站之程式:\n# cmsite\ncmsimde template uses mdecycu/cmsimde as submodule\n\nOn Replit:\n\nfor cmsite: git submodule update --init --recursive \n\nfor cmsimde_site: cmsimde is as directory not submodule\n\nfor cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n \n', 'tags': '', 'url': 'W1~W3(登入並設定筆記作業網站之密碼).html'}, {'title': 'W2~W4', 'text': '', 'tags': '', 'url': 'W2~W4.html'}, {'title': 'IPV4', 'text': '它是當前網際網路上廣泛使用的協定，它使用32位元位址，最多支援約42億個唯一的IP位址。 \n 這些地址以點分十進制表示。 \n 如： 192.168.0.1 \n IPv4地址的32位元位址空間理論上最多可以支援約42億個唯一的IP地址。然而，由於互聯網的急速擴張，這個位址空間逐漸被耗盡，導致IPv4地址枯竭的問題。 \n', 'tags': '', 'url': 'IPV4.html'}, {'title': 'IPV6', 'text': '是網際網路協定的一個版本，它使用128位元位址，提供了約3.4×10^38（約340不可思議）個唯一的IP位址，大大滿足了未來網際網路發展的需求，IPv6還引入了一些新的特性和改進，提高了網路的性能、安全性和可靠性。 \n', 'tags': '', 'url': 'IPV6.html'}, {'title': 'W5(初次嘗試gd繪圖，以三角函數波型圖為例)', 'text': '三角函數波形圖程式:{ pkgs }: {\n    deps = [\n      pkgs.libev\n      pkgs.gnuplot\n      pkgs.ncurses.dev\n      pkgs.gd\n    ];\n  env = {\n    PYTHON_LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [\n      pkgs.libev\n    ];\n  };\n} \n \n \n', 'tags': '', 'url': 'W5(初次嘗試gd繪圖，以三角函數波型圖為例).html'}, {'title': 'w6(以gd繪圖嘗試各國之國旗繪製)', 'text': '', 'tags': '', 'url': 'w6(以gd繪圖嘗試各國之國旗繪製).html'}, {'title': '中華民國國旗', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue);\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    int height = (int)(width*2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("./../images/roc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    int sun_radius = (int)(width/8);\n\n    // Colors for the flag\n    red = gdImageColorAllocate(img, 242, 0, 0); // Red color\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n    blue = gdImageColorAllocate(img, 0, 41, 204); // Blue\n\n    // 繪製紅色矩形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n\n    // 繪製藍色矩形區域\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n\n    // 繪製太陽\n    draw_white_sun(img, center_x, center_y, sun_radius, white, red, blue);\n}\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue) {\n    float angle = 0;\n    int numRays = 12; // 光芒的數量\n\n    gdPoint points[3]; // 三個頂點的陣列\n\n    for (int i = 0; i < numRays; i++) {\n        angle = i * (2 * M_PI / numRays);\n        float x1 = center_x + cos(angle) * sun_radius;\n        float y1 = center_y + sin(angle) * sun_radius;\n\n        // 調整兩個底邊頂點的位置\n      float x2 = center_x + cos(angle + 0.35) * (sun_radius * 0.5);\n      float y2 = center_y + sin(angle + 0.35) * (sun_radius * 0.5);\n      float x3 = center_x + cos(angle - 0.35) * (sun_radius * 0.5);\n      float y3 = center_y + sin(angle - 0.35) * (sun_radius * 0.5);\n\n        // 設定多邊形的三個頂點\n        points[0].x = (int)x1;\n        points[0].y = (int)y1;\n        points[1].x = (int)x2;\n        points[1].y = (int)y2;\n        points[2].x = (int)x3;\n        points[2].y = (int)y3;\n\n        gdImageFilledPolygon(img, points, 3, white);\n    }\n  //外圈\n  gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.2, sun_radius * 1.2, blue);\n\n    // 繪製太陽內部\n    gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.1, sun_radius * 1.1, white);\n} \n \n \n // 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n', 'tags': '', 'url': '中華民國國旗.html'}, {'title': '日本國旗', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n  \nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color);\n  \nint main() {\n    int originalWidth = 1200;\n    int originalHeight = (int)(originalWidth * 2.0 / 3.0);\n    gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);\n    gdImageAlphaBlending(img, 0);\n  \n    draw_japan_flag(img);\n  \n    // 新的宽度和高度以适应 "images" 文件夹\n    int newWidth = 600;\n    int newHeight = (int)(newWidth * 2.0 / 3.0);\n  \n    // 创建新图像并进行缩放\n    gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);\n    gdImageAlphaBlending(resizedImage, 0);\n    gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);\n  \n  FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePng(resizedImage, outputFile);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    gdImageDestroy(resizedImage);\n  \n    return 0;\n}\n  \nvoid draw_japan_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n  \n    // 创建一个白色背景\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);\n  \n    // 绘制红色圆圈（太阳）\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int center_x = width / 2;\n    int center_y = height / 2;\n    int radius = (int)((width * 2) / 3);\n    draw_red_sun(img, center_x, center_y, radius, red);\n}\n  \nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {\n  // 減小 size 的值,例如將他的值減半\n  size = size / 2;\n    gdImageArc(img, x, y, size, size, 0, 360, color);\n    gdImageFillToBorder(img, x, y, color, color);\n}\n \n \n', 'tags': '', 'url': '日本國旗.html'}, {'title': '美國國旗', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n \nint main() {\nint width = 800;\nint height = (int)(width / 1.9);\n \ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n \ndraw_usa_flag(img);\n \nFILE *outputFile = fopen("./../images/usa_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "打开输出文件时出错。\\n");\nreturn 1;\n}\n \ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(img);\n \nreturn 0;\n}\n \nvoid draw_usa_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\nint red, white, blue;\n// 国旗颜色\nred = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\nwhite = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\nblue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n \nint stripe_height = height / 13;\nint stripe_width = width;\nint star_size = (int)(0.0308 * height); // 星星大小\n \nfor (int y = 0; y < height; y += stripe_height) {\nif (y / stripe_height % 2 == 0) {\ngdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n} else {\ngdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n}\n}\n \ngdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n \nint star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\nint star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\nint star_start_x = (int)(0.125 * height); // 星星的起始X位置\nint star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n \nfor (int row = 0; row < 9; row++) {\nint starsPerRow = (row % 2 == 0) ? 6 : 5;\n \n// 计算2、4、6和8排星星的偏移量\nint offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n \nfor (int star = 0; star < starsPerRow; star++) {\nint x = star_start_x + star * star_spacing_x + offset_x;\n \n// 旋转角度（以弧度为单位）\ndouble rotation_angle = M_PI / 5; // 忘記多少度的旋转\n \nint y = star_start_y + row * star_spacing_y;\ndraw_star(img, x, y, star_size, white, rotation_angle);\n}\n}\n}\n \nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\ngdPoint points[10];\n \nfor (int i = 0; i < 10; i++) {\ndouble angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\nint radius = (i % 2 == 0) ? size : size / 2;\npoints[i].x = x + radius * cos(angle);\npoints[i].y = y + radius * sin(angle);\n}\n \n// 用指定的颜色填充星星\ngdImageFilledPolygon(img, points, 10, color);\n} \n \n', 'tags': '', 'url': '美國國旗.html'}, {'title': 'W9(嘗試遠端連結S1511)', 'text': "以下是使用遠端IPV6的連結練習\nMicrosoft Windows [版本 10.0.22621.2428]\n(c) Microsoft Corporation. 著作權所有，並保留一切權利。\n\nC:\\Users\\kim>ssh cp41223114@s1511.cycu.org\ncp41223114@s1511.cycu.org's password:\nPermission denied, please try again.\ncp41223114@s1511.cycu.org's password:\nConnection closed by 2001:288:6004:17:2023:cad:0:1 port 22\n\nC:\\Users\\kim>ssh cp41223114@s1511.cycu.org\ncp41223114@s1511.cycu.org's password:\nPermission denied, please try again.\ncp41223114@s1511.cycu.org's password:\nPermission denied, please try again.\ncp41223114@s1511.cycu.org's password:\ncp41223114@s1511.cycu.org: Permission denied (publickey,password).\n\nC:\\Users\\kim>\nC:\\Users\\kim>ssh cp41223114@s1511.cycu.org\ncp41223114@s1511.cycu.org's password:\nPermission denied, please try again.\ncp41223114@s1511.cycu.org's password:\nWelcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-86-generic x86_64)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  System information as of Tue Oct 31 08:06:16 AM UTC 2023\n\n  System load:             0.02197265625\n  Usage of /:              13.1% of 97.87GB\n  Memory usage:            5%\n  Swap usage:              0%\n  Processes:               555\n  Users logged in:         49\n  IPv6 address for enp0s3: 2001:288:6004:17:a00:27ff:febe:b3b8\n  IPv6 address for enp0s3: 2001:288:6004:17:2023:cad:0:1\n\n * Strictly confined Kubernetes makes edge and IoT secure. Learn how MicroK8s\n   just raised the bar for easy, resilient and secure K8s cluster deployment.\n\n   https://ubuntu.com/engage/secure-kubernetes-at-the-edge\n\nExpanded Security Maintenance for Applications is not enabled.\n\n0 updates can be applied immediately.\n\nEnable ESM Apps to receive additional future security updates.\nSee https://ubuntu.com/esm or run: sudo pro status\n\n\n*** System restart required ***\nLast login: Tue Oct 31 06:56:04 2023 from 2001:288:6004:17:7c8e:d0c6:372c:eca3\ncp41223114@s1511:~$ ssh cp41223114@s1511.cycu.org\nThe authenticity of host 's1511.cycu.org (2001:288:6004:17:2023:cad:0:1)' can't be established.\nED25519 key fingerprint is SHA256:hP1e8xDIxGx7Empt60IyHtcxdC7Hi4aQPlJJGtb1ugs.\nThis key is not known by any other names\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added 's1511.cycu.org' (ED25519) to the list of known hosts.\ncp41223114@s1511.cycu.org's password:\nWelcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-86-generic x86_64)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  System information as of Tue Oct 31 08:09:08 AM UTC 2023\n\n  System load:             0.03759765625\n  Usage of /:              13.1% of 97.87GB\n  Memory usage:            5%\n  Swap usage:              0%\n  Processes:               556\n  Users logged in:         49\n  IPv6 address for enp0s3: 2001:288:6004:17:a00:27ff:febe:b3b8\n  IPv6 address for enp0s3: 2001:288:6004:17:2023:cad:0:1\n\n * Strictly confined Kubernetes makes edge and IoT secure. Learn how MicroK8s\n   just raised the bar for easy, resilient and secure K8s cluster deployment.\n\n   https://ubuntu.com/engage/secure-kubernetes-at-the-edge\n\nExpanded Security Maintenance for Applications is not enabled.\n\n0 updates can be applied immediately.\n\nEnable ESM Apps to receive additional future security updates.\nSee https://ubuntu.com/esm or run: sudo pro status\n\n\n*** System restart required ***\nLast login: Tue Oct 31 08:06:22 2023 from 2001:288:6004:17:dc23:b200:834e:af34\ncp41223114@s1511:~$ ssh-keygen\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/home/cp41223114/.ssh/id_rsa): id_rsa\nEnter passphrase (empty for no passphrase):\nEnter same passphrase again:\nYour identification has been saved in id_rsa\nYour public key has been saved in id_rsa.pub\nThe key fingerprint is:\nSHA256:jSCgFoauz022wRZTM72syFTN3AUOtgG/bIvrF3LuRBM cp41223114@s1511\nThe key's randomart image is:\n+---[RSA 3072]----+\n|.o.   .*+..o.    |\n|o...  =o==.      |\n|o.  .o.+E..      |\n|..  +. oo=       |\n|.  + + .S .      |\n|.   O o+oo       |\n| o = o.+o.       |\n|  o o  oo        |\n|     .oo.        |\n+----[SHA256]-----+\ncp41223114@s1511:~$ >1s -1\n-1: command not found\ncp41223114@s1511:~$ -1s -1\n-1s: command not found\ncp41223114@s1511:~$ mkdir tmp\ncp41223114@s1511:~$ client_loop: send disconnect: Connection reset\n\nC:\\Users\\kim> cd .ssh\n\nC:\\Users\\kim\\.ssh>\nC:\\Users\\kim\\.ssh>~/ .ssh$\n'~' is not recognized as an internal or external command,\noperable program or batch file.\n\nC:\\Users\\kim\\.ssh>ssh cp41223114@s1511.cycu.org\ncp41223114@s1511.cycu.org's password:\nWelcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-86-generic x86_64)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  System information as of Tue Oct 31 09:20:25 AM UTC 2023\n\n  System load:             0.0\n  Usage of /:              13.2% of 97.87GB\n  Memory usage:            3%\n  Swap usage:              0%\n  Processes:               285\n  Users logged in:         11\n  IPv6 address for enp0s3: 2001:288:6004:17:a00:27ff:febe:b3b8\n  IPv6 address for enp0s3: 2001:288:6004:17:2023:cad:0:1\n\n * Strictly confined Kubernetes makes edge and IoT secure. Learn how MicroK8s\n   just raised the bar for easy, resilient and secure K8s cluster deployment.\n\n   https://ubuntu.com/engage/secure-kubernetes-at-the-edge\n\nExpanded Security Maintenance for Applications is not enabled.\n\n0 updates can be applied immediately.\n\nEnable ESM Apps to receive additional future security updates.\nSee https://ubuntu.com/esm or run: sudo pro status\n\n\n*** System restart required ***\nLast login: Tue Oct 31 08:09:13 2023 from 2001:288:6004:17:2023:cad:0:1\ncp41223114@s1511:~$ ssh-keygen\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/home/cp41223114/.ssh/id_rsa):\nEnter passphrase (empty for no passphrase):\nEnter same passphrase again:\nYour identification has been saved in /home/cp41223114/.ssh/id_rsa\nYour public key has been saved in /home/cp41223114/.ssh/id_rsa.pub\nThe key fingerprint is:\nSHA256:aiF/FZzqNVDdkXwoWM6nmMrNsiU/VZMPwn3RMxX3JHI cp41223114@s1511\nThe key's randomart image is:\n+---[RSA 3072]----+\n|          .+ooE=B|\n|         o.+oo=*=|\n|        . +.oo.o=|\n|         o +oo* .|\n|    . . S * .o = |\n|     o = * ..   .|\n|      + B +.     |\n|     . . *.      |\n|        . ..     |\n+----[SHA256]-----+\ncp41223114@s1511:~$ cd ssh\n-bash: cd: ssh: No such file or directory\ncp41223114@s1511:~$ cd .ssh\ncp41223114@s1511:~/.ssh$ client_loop: send disconnect: Connection reset\n\nC:\\Users\\kim\\.ssh>\n\n以下是tmp的連結練習(遠端)\nC:\\tmp>sftp 41223114@s1511.cycu.org\n41223114@s1511.cycu.org's password:\nPermission denied, please try again.\n41223114@s1511.cycu.org's password:\nConnection reset by 2001:288:6004:17:2023:cad:0:1 port 22\nConnection closed\n\nC:\\tmp>sftp 41223114@s1511.cycu.org\nssh: connect to host s1511.cycu.org port 22: Connection timed out\nConnection closed\n\nC:\\tmp>\nC:\\tmp>sftp 41223114@s1511.cycu.org\nssh: connect to host s1511.cycu.org port 22: Connection timed out\nConnection closed\n\nC:\\tmp>sftp 41223114@s1511.cycu.org\nssh: connect to host s1511.cycu.org port 22: Connection timed out\nConnection closed\n\n目前未能完成連結\n可能原因為以下幾點:\n       1.第一分頁之程式尚未完成(可能性很低)\n       2.因為需要IPV6才能完成 本人於112/11/1來到電腦教室聯結網線並開啟proxy以連結IPV6 但是打入密碼一樣未成功 有可能是老師不在所以沒有開啟資料庫來使用 因此連結未成功\n       3.使用遠端插網線進不去 可是我也試過近端 一樣沒用 所以這點可能性也很低(以上是這次失敗總結 等下次上課再嘗試) \n \n 更 我終於成功了 可是我最後是用putty的方法，但至少我這次對於這方面底層程式的理解有初步的認識。 \n \n", 'tags': '', 'url': 'W9(嘗試遠端連結S1511).html'}, {'title': 'W11(使用瀏覽器開啟國旗檔)', 'text': '\n 目前成功使用shells開啟C語言 \n 並使用瀏覽器檢視其檔案(hello gd) \n \n \n', 'tags': '', 'url': 'W11(使用瀏覽器開啟國旗檔).html'}, {'title': 'W13(開啟github倉儲)', 'text': '經過我不懈的努力，github的倉儲才被我叫出來 \n \n \n', 'tags': '', 'url': 'W13(開啟github倉儲).html'}, {'title': 'putty使用', 'text': '', 'tags': '', 'url': 'putty使用.html'}, {'title': '步驟1', 'text': '使用puttygen.exe定位主機位置並獲得key(點擊Generate開始定位)\n\n如圖:(鼠標需在其檔案頁面範圍內不斷移動直到綠條跑完)\n\n\n\n\n\n\n \n \n 將key(圖上藍色框選的亂碼)複製新增到自己倉儲帳號(設定-SSH keys)，同時也要點圖上的Save private key\n\n儲存到tinyc-data-home(名稱學號)\n\n貼至倉儲綁定的亂碼就是自己設的鎖，而鑰匙就是儲存至自己的USB中的.ppk檔 \n', 'tags': '', 'url': '步驟1.html'}, {'title': '步驟2', 'text': '使用putty.exe把要鑰匙與倉儲座連接 \n \n', 'tags': '', 'url': '步驟2.html'}, {'title': '步驟3', 'text': '至SSH裡的Auth裡的Credentials，將.ppk檔數入\n\n \n 在命令字元打上reedit，尋找到剛剛處存的key整個目錄檔後右鍵匯出至USB中 \n \n 字元指令至(cd)自己要克隆抓取後放置的位置\n\n輸入git clone --recurse-submodules git@41223114:zhe41223114/cp2023.git\n\n(上述粗體字前者為.ppk檔案名:後者為倉儲帳號)\n\n將倉儲資料複製到USB，之後cd進cp2023(克隆下的資料檔名)\n\n輸入cms 就可開啟近端網站進行維護了 \n \n 目前已使用putty將鎖頭與鎖設定完成(ppk檔案) \n \n', 'tags': '', 'url': '步驟3.html'}, {'title': 'W15', 'text': '', 'tags': '', 'url': 'W15.html'}, {'title': 'Q1', 'text': 'ANS: \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\n\nint main() {\n    int width = 1200;\n    int height = (int)(width * 2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("roc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    int center_x = (int)(width / 4);\n    int center_y = (int)(height / 4);\n\n    red = gdImageColorAllocate(img, 255, 0, 0);\n    white = gdImageColorAllocate(img, 255, 255, 255);\n    blue = gdImageColorAllocate(img, 0, 0, 149);\n\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n    gdImageFilledRectangle(img, 0, 0, (int)(width / 2.0), (int)(height / 2.0), blue);\n\n    int A_x = 429;\n    int A_y = 125;\n    int B_x = 279;\n    int B_y = 165;\n    int E_x = 170;\n    int E_y = 274;\n    int D_x = 319;\n    int D_y = 234;\n\n    gdImageLine(img, A_x, A_y, B_x, B_y, white);\n    gdImageLine(img, B_x, B_y, E_x, E_y, white);\n    gdImageLine(img, E_x, E_y, D_x, D_y, white);\n    gdImageLine(img, D_x, D_y, A_x, A_y, white);\n} \n \n \n \n \n \n', 'tags': '', 'url': 'Q1.html'}, {'title': 'experience', 'text': '心得: 這些課程學習到的東西對於我來說相當新鮮，但正因為這些內容實在是太新鮮了，以至於我在學習的過程中常常只懂得依樣畫葫蘆，但即使如此，我還是嘗試好多次，才有了以上的成果，但我希望上課內容可以先和學員普及其中運作的原理，預留較多的時間才能真正學習好內容。 \n', 'tags': '', 'url': 'experience.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};