import { addMainQContextMenu } from "./qContextMenu.js";
import { decodeQR } from "./decodeQR.js";

const qrcodeHTML = `
<div class="q-context-menu-item__icon q-context-menu-item__head">
    <svg class="q-icon" t="1689317139126" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2413" width="18" height="18">
        <defs>
            <style><![CDATA[
            .path {
                stroke: currentColor;
                fill: currentColor;
                }
            ]]></style>
        </defs>
        <path class="path" d="M742.8 121.5c-2.3 0.3-4.7 0.1-7 0.1-38 0-76-0.1-114 0.1-11 0-21.9 1.4-32.4 5.1-18.6 6.5-29.8 19.5-34.4 38.4-1.7 7-2.4 14.1-2.4 21.3 0 67.2-0.1 134.3 0.1 201.5 0 13.8 0.9 27.6 6.2 40.8 6.9 17.1 19.7 27.2 37.3 31.7 6.3 1.6 12.8 2.2 19.3 2.2h218c8.3 0 16.6-0.7 24.8-2.3 24.4-4.5 40.4-20.7 44.9-45 0.4-2.2-0.4-5.2 2.9-6.2v-232c-0.4-0.4-0.5-0.9-0.5-1.5-1.5-4.8-1.7-9.8-3.3-14.7-7.1-21-21.7-33.4-42.8-38.8-6.4-1.6-12.8-2.4-19.5-2.1-1.3 0.1-3 1-3.9-0.9h-89c-0.4 2.6-2.7 2.1-4.3 2.3z m98.7 40.7c4 0 8.1 0.9 11.9 2.1 6.9 2.2 10.7 7.6 10.7 15.1 0 74.8 0.1 149.6-0.1 224.4 0 11.2-8.6 18-21.1 18.1-38.2 0.3-76.3 0.1-114.5 0.1h-113c-4.5 0-8.6-1.3-12.7-2.7-8.5-3.1-9.6-10.5-9.7-17.9-0.2-37.5-0.1-75-0.1-112.5V183.4c0-6.5 1.5-12.5 6.9-17 4.6-3.8 10.3-4.3 15.6-4.3 75.4-0.1 150.8 0 226.1 0.1z" p-id="2414"></path>
        <path class="path" d="M742 120c-39.5 0.1-79 0.1-118.4 0.1-9.4 0-18.6 1-27.7 3.1-11.6 2.7-22.1 7.7-30 16.7-10.6 12.1-14.8 26.9-14.8 42.6-0.2 69.6-0.2 139.3 0 208.9 0 9.1 0.7 18.3 2.8 27.2 2.8 11.7 7.6 22.5 16.7 30.5 11.7 10.3 25.9 15 41.5 15 74.1 0.1 148.3 0.1 222.4 0 9.3 0 18.7-0.5 27.7-3 19-5.4 33.6-15.9 40-35.8 1.7-5.3 1.8-10.9 3.8-16.1-3.2 1-2.5 4-2.9 6.2-4.5 24.4-20.5 40.5-44.9 45-8.2 1.5-16.5 2.3-24.8 2.3h-218c-6.5 0-13-0.6-19.3-2.2-17.5-4.5-30.4-14.6-37.3-31.7-5.3-13.1-6.2-27-6.2-40.8-0.2-67.2-0.1-134.3-0.1-201.5 0-7.2 0.7-14.3 2.4-21.3 4.6-18.9 15.8-31.9 34.4-38.4 10.5-3.7 21.4-5 32.4-5.1 38-0.2 76-0.1 114-0.1 2.3 0 4.7 0.2 7-0.1 1.7-0.2 3.9 0.2 4.2-2.4-1.2 2.1-3.2 0.9-4.9 0.9zM120.6 410.3c2 12.5 5.5 24.4 14.3 34 11.5 12.7 26.5 18 43 18.1 75.1 0.3 150.2 0.3 225.4 0 9.4 0 18.9-1 28.1-3.9 24.5-7.7 39.1-27.3 39.1-53.1 0-74 0-147.9 0.1-221.9 0-6.4-0.8-12.6-2.4-18.8-5.8-22.4-24.5-39.1-47.5-42.3-4.1-0.6-8.2-1.1-12.4-1.1-2 0-4.5 0.6-5.2-2.4h-89c-1.3 2.1-3.3 0.9-4.9 0.9-41.1 0.1-82.2-0.2-123.3 0.2-14.8 0.1-29.2 2.6-42.2 10.7-12.5 7.8-19.8 19.1-23.7 33-0.8 2.7-0.2 5.7-1.9 8.2v233c2.9 0.9 2.2 3.5 2.5 5.4z m39.5-231c0-8.1 6.2-14.6 14.5-16.3 4.4-0.9 8.8-1 13.2-1h219c4.3 0 8.4 0.8 12.4 2 7.5 2.4 10.8 6.9 10.8 14.6v225.5c0 8.2-3.8 13.3-11.6 15.9-4 1.3-8.1 2.1-12.4 2-37.2-0.1-74.3-0.1-111.5-0.1-37.7 0-75.3 0.1-113-0.1-6.3 0-12.6-0.9-17.3-6.1-2.7-3-4.1-6.3-4.1-10.1-0.1-75.3-0.1-150.8 0-226.3z" p-id="2415"></path>
        <path class="path" d="M119 407.5c0.1 8.9 2.6 17.3 6.4 25.1 10.4 21.4 28.9 31 51.6 31.2 74.5 0.6 149 0.2 223.4 0.2 9.3 0 18.6-0.8 27.7-3 27.1-6.7 43.6-26.4 43.8-54.4 0.5-73.8 0.2-147.6 0.2-221.4 0-4.9 0-9.8-0.9-14.7-3-16.2-10.7-29.4-24.2-39-11-7.8-23.5-11-36.9-11.4-2.3-0.1-4.9 1.2-6.9-0.9 0.7 3 3.3 2.4 5.2 2.4 4.2 0 8.3 0.6 12.4 1.1 23 3.2 41.7 19.9 47.5 42.3 1.6 6.2 2.4 12.4 2.4 18.8-0.1 74 0 147.9-0.1 221.9 0 25.7-14.6 45.3-39.1 53.1-9.2 2.9-18.7 3.9-28.1 3.9-75.1 0.2-150.2 0.3-225.4 0-16.5-0.1-31.4-5.4-43-18.1-8.8-9.7-12.3-21.5-14.3-34-0.3-1.9 0.4-4.6-2.6-5.2 1.3 0.1 0.9 1.3 0.9 2.1zM191.8 882.7c2.1-0.3 4.3-0.1 6.5-0.1h206c8.4 0 16.6-1 24.7-3.1 25.5-6.6 41.4-26.9 41.5-53.2 0.1-25.3 0-50.7 0-76v-148c0-32.3-21.4-56.2-53.6-59.7-11.4-1.2-22.9-1.7-34.4-2-34.5-0.7-69 0.5-103.4 1.3-33 0.8-66 0.2-98.9 0.7-11.5 0.2-22.6 2.7-32.7 8.1-13.6 7.2-21.9 18.5-25.7 33.4-0.7 2.8-0.1 6.5-3.7 8v234c2 5.5 2.2 11.4 3.9 17.1 5.9 20.7 19.4 33.3 39.8 38.9 6.5 1.8 13.2 2.3 19.9 2.1 1.4 0 3.3-1.1 4.4 0.9h2c0.2-2.3 2.1-2.2 3.7-2.4z m-11.4-40.6c-12.2 0-20.7-6.6-20.6-20.5 0.4-73.3 0.2-146.6 0.1-220 0-11.8 7-18.1 18.3-18.5 74.6-2.4 149.1-0.5 223.7-0.8 6.4 0 13.4-0.4 19.6 3 5.4 3 8.5 7.2 8.5 13.7-0.1 37.5 0 75 0 112.5 0 37.2-0.2 74.3 0.1 111.5 0.1 12.1-7.8 17.6-18.7 19.3-8.6 1.3-17 0-25.5-0.1-68.5-0.2-137-0.1-205.5-0.1z" p-id="2416"></path>
        <path class="path" d="M193.5 884.2c67.8-0.1 135.7-0.1 203.5 0 9.4 0 18.7-0.2 28-2.1 12.5-2.5 23.8-7.8 32.5-17.1 9.7-10.4 14.5-23.4 14.5-37.6 0.2-74.3 0.1-148.7 0.1-223 0-6.3-0.4-12.4-2-18.5-5.3-19.9-17.3-33.7-36.7-41.3-13.3-5.2-27.3-5-41-5.3-23.1-0.5-46.2-0.9-69.3 0.5-19 1.2-38.2 0.3-57.3 1-27.6 0.9-55.3 0.3-83 0.2-6.4 0-12.7 0.6-19 2-18.4 4.2-32.5 13.8-40.6 31.3-2.6 5.7-2.8 12-5.2 17.7 3.7-1.5 3-5.2 3.7-8 3.8-14.9 12.2-26.2 25.7-33.4 10.2-5.4 21.2-7.9 32.7-8.1 33-0.5 65.9 0.1 98.9-0.7 34.5-0.8 68.9-2 103.4-1.3 11.5 0.2 23 0.7 34.4 2 32.2 3.5 53.5 27.4 53.6 59.7v148c0 25.3 0.1 50.7 0 76-0.2 26.4-16 46.6-41.5 53.2-8.1 2.1-16.3 3.1-24.7 3.1h-206c-2.2 0-4.3-0.1-6.5 0.1-1.6 0.2-3.5 0-3.7 2.4 1.5-1.9 3.7-0.8 5.5-0.8z" p-id="2417"></path>
        <path class="path" d="M143.6 130.9c13-8 27.4-10.6 42.2-10.7 41.1-0.4 82.2-0.1 123.3-0.2 1.6 0 3.6 1.2 4.9-0.9-1.7 1-3.6 0.5-5.4 0.5-44.8 0.3-89.6-0.8-134.4 0.6-18.9 0.6-34.9 8.1-46.5 23.6-6.3 8.4-9.1 18-9.7 28.3 1.8-2.4 1.2-5.4 1.9-8.2 4-13.9 11.2-25.2 23.7-33zM840 120c6.6-0.3 13.1 0.5 19.5 2.1 21 5.4 35.7 17.8 42.8 38.8 1.6 4.8 1.8 9.9 3.3 14.7v-0.4c0.4-28.1-24.4-53.2-52.7-55.3-5.6-0.4-11.2 0.5-16.8-0.9 0.8 2.1 2.6 1.1 3.9 1zM181.6 884.2c-6.7 0.2-13.4-0.3-19.9-2.1-20.4-5.6-33.9-18.2-39.8-38.9-1.6-5.7-1.8-11.6-3.9-17.1 1.1 5.3 0.8 10.8 2.1 16.1 5.5 22.8 25.5 40.6 48.6 42 5.8 0.4 11.6-0.6 17.3 0.8-1.1-1.9-3-0.9-4.4-0.8z" p-id="2418"></path>
        <path class="path" d="M608.4 667.2c-12.3 0.2-20.4 8.3-20.4 20V859c0 12.3 8.5 20.1 20.8 19.9 12.9-0.2 21-6.9 21.1-19.7 0.2-57.4 0.1-114.9 0-172.3 0-12-8.4-19.9-21.5-19.7zM861.4 667.4c-9.9-1.8-23.3 4.9-23.3 18.2-0.2 29.2 0 58.3 0 87.5v87c0 1.6-0.1 3.4 0.4 4.9 3.3 9.4 14.4 16.2 23.5 14 11.4-2.7 17.9-7.2 18-21.4 0.2-55.5 0.1-111 0.1-166.5-0.1-14.4-4.6-21.1-18.7-23.7zM768.7 727.3c-2.6-9.4-13-16.8-22.1-15.1-12.4 2.4-19.4 6.6-19.5 20.9-0.3 41.1-0.1 82.3-0.1 123.4 0 13.8 5.7 20 17.5 22.2 11.1 2.1 24.4-4.5 24.5-19.1v-63.5-64.5c0-1.3 0-2.9-0.3-4.3zM741 544.8c-8.7 1.9-14 10.2-14 19.8V653c0 13.1 4 21 18.1 23.7 10.3 1.9 24-5.2 23.9-18.5-0.1-15.8 0-31.6 0-47.5 0-15.3-0.2-30.6 0-46 0.3-19-14.6-22.8-28-19.9zM622 547.4c-4.9-3.4-10.1-3.3-15.4-3.3-10.5 0-18.5 7.9-18.5 18.3v26c0 9-0.1 18 0 27 0.1 4.6 1.3 8.7 4.9 12.3 5.2 5.2 11.2 6.7 18.2 6.5 9.9-0.3 18.8-8.9 18.8-18.7 0.1-17.7 0.2-35.3-0.1-53 0-6.1-2.4-11.3-7.9-15.1zM878.3 555.9c-2.2-6.2-9.8-11.8-17.9-12-14.3-0.5-23.6 7.9-22.5 22.8 0.5 7 0.1 14 0.1 21v25c0 1.5 0 3 0.4 4.4 3.2 10.3 12.9 15.5 23.9 14 11-1.6 17.4-8.4 17.6-19.7 0.3-15.8 0.1-31.7 0.1-47.5 0-2.9-0.8-5.5-1.7-8zM352 257.8c-1.9-7.3-7.9-12.7-15.4-13.7-1.3-0.2-2.7-0.4-4-0.4-0.6 0-1.5 0.2-1.7-0.8h-28.8c-0.4 0.7-1.1 0.3-1.6 0.3-13.3 0-26.6-0.1-39.9 0.1-4.8 0-9.5 0.9-13.7 3.5-4.1 2.5-6.4 6.2-7.7 10.7-0.2 0.9 0 1.9-0.6 2.6v75.5c1 0.2 0.7 1.1 0.8 1.7 0.7 4.1 1.8 7.9 4.6 11 3.7 4.1 8.6 5.8 13.9 5.9 24.3 0.1 48.7 0.1 73 0 3.1 0 6.1-0.3 9.1-1.3 7.9-2.5 12.7-8.9 12.7-17.2v-71.9c0.1-2-0.2-4-0.7-6zM785.5 250.1c-1.9-7.3-7.9-12.7-15.4-13.7-1.3-0.2-2.7-0.4-4-0.4-0.6 0-1.5 0.2-1.7-0.8h-28.8c-0.4 0.7-1.1 0.3-1.6 0.3-13.3 0-26.6-0.1-39.9 0.1-4.8 0-9.5 0.9-13.7 3.5-4.1 2.5-6.4 6.2-7.7 10.7-0.2 0.9 0 1.9-0.6 2.6v75.5c1 0.2 0.7 1.1 0.8 1.7 0.7 4.1 1.8 7.9 4.6 11 3.7 4.1 8.6 5.8 13.9 5.9 24.3 0.1 48.7 0.1 73 0 3.1 0 6.1-0.3 9.1-1.3 7.9-2.5 12.7-8.9 12.7-17.2v-71.9c0.2-2-0.2-4.1-0.7-6zM351.4 676.6c-1.9-7.3-7.9-12.7-15.4-13.7-1.3-0.2-2.7-0.4-4-0.4-0.6 0-1.5 0.2-1.7-0.8h-28.8c-0.4 0.7-1.1 0.3-1.6 0.3-13.3 0-26.6-0.1-39.9 0.1-4.8 0-9.5 0.9-13.7 3.5-4.1 2.5-6.4 6.2-7.7 10.7-0.2 0.9 0 1.9-0.6 2.6v75.5c1 0.2 0.7 1.1 0.8 1.7 0.7 4.1 1.8 7.9 4.6 11 3.7 4.1 8.6 5.8 13.9 5.9 24.3 0.1 48.7 0.1 73 0 3.1 0 6.1-0.3 9.1-1.3 7.9-2.5 12.7-8.9 12.7-17.2v-71.9c0.1-2-0.2-4-0.7-6z" p-id="2419"></path>
    </svg>
</div>
<span class="q-context-menu-item__text">作为二维码解析</span>
`;

const qrcodeBtn = `
<div class="q-tooltips" id="qrcodeBtn">
    <div class="image-viewer__qrcode image-viewer__icon" >
        <i class="q-icon" style="--69ad356d: 24px;display:flex;justify-content:center;align-items:center;">
            <svg class="q-icon" t="1689317139126" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2413" width="24" height="24">
                <defs>
                    <style><![CDATA[
                    .path {
                        stroke: currentColor;
                        fill: currentColor;
                        }
                    ]]></style>
                </defs>
                <path class="path" d="M742.8 121.5c-2.3 0.3-4.7 0.1-7 0.1-38 0-76-0.1-114 0.1-11 0-21.9 1.4-32.4 5.1-18.6 6.5-29.8 19.5-34.4 38.4-1.7 7-2.4 14.1-2.4 21.3 0 67.2-0.1 134.3 0.1 201.5 0 13.8 0.9 27.6 6.2 40.8 6.9 17.1 19.7 27.2 37.3 31.7 6.3 1.6 12.8 2.2 19.3 2.2h218c8.3 0 16.6-0.7 24.8-2.3 24.4-4.5 40.4-20.7 44.9-45 0.4-2.2-0.4-5.2 2.9-6.2v-232c-0.4-0.4-0.5-0.9-0.5-1.5-1.5-4.8-1.7-9.8-3.3-14.7-7.1-21-21.7-33.4-42.8-38.8-6.4-1.6-12.8-2.4-19.5-2.1-1.3 0.1-3 1-3.9-0.9h-89c-0.4 2.6-2.7 2.1-4.3 2.3z m98.7 40.7c4 0 8.1 0.9 11.9 2.1 6.9 2.2 10.7 7.6 10.7 15.1 0 74.8 0.1 149.6-0.1 224.4 0 11.2-8.6 18-21.1 18.1-38.2 0.3-76.3 0.1-114.5 0.1h-113c-4.5 0-8.6-1.3-12.7-2.7-8.5-3.1-9.6-10.5-9.7-17.9-0.2-37.5-0.1-75-0.1-112.5V183.4c0-6.5 1.5-12.5 6.9-17 4.6-3.8 10.3-4.3 15.6-4.3 75.4-0.1 150.8 0 226.1 0.1z" p-id="2414"></path>
                <path class="path" d="M742 120c-39.5 0.1-79 0.1-118.4 0.1-9.4 0-18.6 1-27.7 3.1-11.6 2.7-22.1 7.7-30 16.7-10.6 12.1-14.8 26.9-14.8 42.6-0.2 69.6-0.2 139.3 0 208.9 0 9.1 0.7 18.3 2.8 27.2 2.8 11.7 7.6 22.5 16.7 30.5 11.7 10.3 25.9 15 41.5 15 74.1 0.1 148.3 0.1 222.4 0 9.3 0 18.7-0.5 27.7-3 19-5.4 33.6-15.9 40-35.8 1.7-5.3 1.8-10.9 3.8-16.1-3.2 1-2.5 4-2.9 6.2-4.5 24.4-20.5 40.5-44.9 45-8.2 1.5-16.5 2.3-24.8 2.3h-218c-6.5 0-13-0.6-19.3-2.2-17.5-4.5-30.4-14.6-37.3-31.7-5.3-13.1-6.2-27-6.2-40.8-0.2-67.2-0.1-134.3-0.1-201.5 0-7.2 0.7-14.3 2.4-21.3 4.6-18.9 15.8-31.9 34.4-38.4 10.5-3.7 21.4-5 32.4-5.1 38-0.2 76-0.1 114-0.1 2.3 0 4.7 0.2 7-0.1 1.7-0.2 3.9 0.2 4.2-2.4-1.2 2.1-3.2 0.9-4.9 0.9zM120.6 410.3c2 12.5 5.5 24.4 14.3 34 11.5 12.7 26.5 18 43 18.1 75.1 0.3 150.2 0.3 225.4 0 9.4 0 18.9-1 28.1-3.9 24.5-7.7 39.1-27.3 39.1-53.1 0-74 0-147.9 0.1-221.9 0-6.4-0.8-12.6-2.4-18.8-5.8-22.4-24.5-39.1-47.5-42.3-4.1-0.6-8.2-1.1-12.4-1.1-2 0-4.5 0.6-5.2-2.4h-89c-1.3 2.1-3.3 0.9-4.9 0.9-41.1 0.1-82.2-0.2-123.3 0.2-14.8 0.1-29.2 2.6-42.2 10.7-12.5 7.8-19.8 19.1-23.7 33-0.8 2.7-0.2 5.7-1.9 8.2v233c2.9 0.9 2.2 3.5 2.5 5.4z m39.5-231c0-8.1 6.2-14.6 14.5-16.3 4.4-0.9 8.8-1 13.2-1h219c4.3 0 8.4 0.8 12.4 2 7.5 2.4 10.8 6.9 10.8 14.6v225.5c0 8.2-3.8 13.3-11.6 15.9-4 1.3-8.1 2.1-12.4 2-37.2-0.1-74.3-0.1-111.5-0.1-37.7 0-75.3 0.1-113-0.1-6.3 0-12.6-0.9-17.3-6.1-2.7-3-4.1-6.3-4.1-10.1-0.1-75.3-0.1-150.8 0-226.3z" p-id="2415"></path>
                <path class="path" d="M119 407.5c0.1 8.9 2.6 17.3 6.4 25.1 10.4 21.4 28.9 31 51.6 31.2 74.5 0.6 149 0.2 223.4 0.2 9.3 0 18.6-0.8 27.7-3 27.1-6.7 43.6-26.4 43.8-54.4 0.5-73.8 0.2-147.6 0.2-221.4 0-4.9 0-9.8-0.9-14.7-3-16.2-10.7-29.4-24.2-39-11-7.8-23.5-11-36.9-11.4-2.3-0.1-4.9 1.2-6.9-0.9 0.7 3 3.3 2.4 5.2 2.4 4.2 0 8.3 0.6 12.4 1.1 23 3.2 41.7 19.9 47.5 42.3 1.6 6.2 2.4 12.4 2.4 18.8-0.1 74 0 147.9-0.1 221.9 0 25.7-14.6 45.3-39.1 53.1-9.2 2.9-18.7 3.9-28.1 3.9-75.1 0.2-150.2 0.3-225.4 0-16.5-0.1-31.4-5.4-43-18.1-8.8-9.7-12.3-21.5-14.3-34-0.3-1.9 0.4-4.6-2.6-5.2 1.3 0.1 0.9 1.3 0.9 2.1zM191.8 882.7c2.1-0.3 4.3-0.1 6.5-0.1h206c8.4 0 16.6-1 24.7-3.1 25.5-6.6 41.4-26.9 41.5-53.2 0.1-25.3 0-50.7 0-76v-148c0-32.3-21.4-56.2-53.6-59.7-11.4-1.2-22.9-1.7-34.4-2-34.5-0.7-69 0.5-103.4 1.3-33 0.8-66 0.2-98.9 0.7-11.5 0.2-22.6 2.7-32.7 8.1-13.6 7.2-21.9 18.5-25.7 33.4-0.7 2.8-0.1 6.5-3.7 8v234c2 5.5 2.2 11.4 3.9 17.1 5.9 20.7 19.4 33.3 39.8 38.9 6.5 1.8 13.2 2.3 19.9 2.1 1.4 0 3.3-1.1 4.4 0.9h2c0.2-2.3 2.1-2.2 3.7-2.4z m-11.4-40.6c-12.2 0-20.7-6.6-20.6-20.5 0.4-73.3 0.2-146.6 0.1-220 0-11.8 7-18.1 18.3-18.5 74.6-2.4 149.1-0.5 223.7-0.8 6.4 0 13.4-0.4 19.6 3 5.4 3 8.5 7.2 8.5 13.7-0.1 37.5 0 75 0 112.5 0 37.2-0.2 74.3 0.1 111.5 0.1 12.1-7.8 17.6-18.7 19.3-8.6 1.3-17 0-25.5-0.1-68.5-0.2-137-0.1-205.5-0.1z" p-id="2416"></path>
                <path class="path" d="M193.5 884.2c67.8-0.1 135.7-0.1 203.5 0 9.4 0 18.7-0.2 28-2.1 12.5-2.5 23.8-7.8 32.5-17.1 9.7-10.4 14.5-23.4 14.5-37.6 0.2-74.3 0.1-148.7 0.1-223 0-6.3-0.4-12.4-2-18.5-5.3-19.9-17.3-33.7-36.7-41.3-13.3-5.2-27.3-5-41-5.3-23.1-0.5-46.2-0.9-69.3 0.5-19 1.2-38.2 0.3-57.3 1-27.6 0.9-55.3 0.3-83 0.2-6.4 0-12.7 0.6-19 2-18.4 4.2-32.5 13.8-40.6 31.3-2.6 5.7-2.8 12-5.2 17.7 3.7-1.5 3-5.2 3.7-8 3.8-14.9 12.2-26.2 25.7-33.4 10.2-5.4 21.2-7.9 32.7-8.1 33-0.5 65.9 0.1 98.9-0.7 34.5-0.8 68.9-2 103.4-1.3 11.5 0.2 23 0.7 34.4 2 32.2 3.5 53.5 27.4 53.6 59.7v148c0 25.3 0.1 50.7 0 76-0.2 26.4-16 46.6-41.5 53.2-8.1 2.1-16.3 3.1-24.7 3.1h-206c-2.2 0-4.3-0.1-6.5 0.1-1.6 0.2-3.5 0-3.7 2.4 1.5-1.9 3.7-0.8 5.5-0.8z" p-id="2417"></path>
                <path class="path" d="M143.6 130.9c13-8 27.4-10.6 42.2-10.7 41.1-0.4 82.2-0.1 123.3-0.2 1.6 0 3.6 1.2 4.9-0.9-1.7 1-3.6 0.5-5.4 0.5-44.8 0.3-89.6-0.8-134.4 0.6-18.9 0.6-34.9 8.1-46.5 23.6-6.3 8.4-9.1 18-9.7 28.3 1.8-2.4 1.2-5.4 1.9-8.2 4-13.9 11.2-25.2 23.7-33zM840 120c6.6-0.3 13.1 0.5 19.5 2.1 21 5.4 35.7 17.8 42.8 38.8 1.6 4.8 1.8 9.9 3.3 14.7v-0.4c0.4-28.1-24.4-53.2-52.7-55.3-5.6-0.4-11.2 0.5-16.8-0.9 0.8 2.1 2.6 1.1 3.9 1zM181.6 884.2c-6.7 0.2-13.4-0.3-19.9-2.1-20.4-5.6-33.9-18.2-39.8-38.9-1.6-5.7-1.8-11.6-3.9-17.1 1.1 5.3 0.8 10.8 2.1 16.1 5.5 22.8 25.5 40.6 48.6 42 5.8 0.4 11.6-0.6 17.3 0.8-1.1-1.9-3-0.9-4.4-0.8z" p-id="2418"></path>
                <path class="path" d="M608.4 667.2c-12.3 0.2-20.4 8.3-20.4 20V859c0 12.3 8.5 20.1 20.8 19.9 12.9-0.2 21-6.9 21.1-19.7 0.2-57.4 0.1-114.9 0-172.3 0-12-8.4-19.9-21.5-19.7zM861.4 667.4c-9.9-1.8-23.3 4.9-23.3 18.2-0.2 29.2 0 58.3 0 87.5v87c0 1.6-0.1 3.4 0.4 4.9 3.3 9.4 14.4 16.2 23.5 14 11.4-2.7 17.9-7.2 18-21.4 0.2-55.5 0.1-111 0.1-166.5-0.1-14.4-4.6-21.1-18.7-23.7zM768.7 727.3c-2.6-9.4-13-16.8-22.1-15.1-12.4 2.4-19.4 6.6-19.5 20.9-0.3 41.1-0.1 82.3-0.1 123.4 0 13.8 5.7 20 17.5 22.2 11.1 2.1 24.4-4.5 24.5-19.1v-63.5-64.5c0-1.3 0-2.9-0.3-4.3zM741 544.8c-8.7 1.9-14 10.2-14 19.8V653c0 13.1 4 21 18.1 23.7 10.3 1.9 24-5.2 23.9-18.5-0.1-15.8 0-31.6 0-47.5 0-15.3-0.2-30.6 0-46 0.3-19-14.6-22.8-28-19.9zM622 547.4c-4.9-3.4-10.1-3.3-15.4-3.3-10.5 0-18.5 7.9-18.5 18.3v26c0 9-0.1 18 0 27 0.1 4.6 1.3 8.7 4.9 12.3 5.2 5.2 11.2 6.7 18.2 6.5 9.9-0.3 18.8-8.9 18.8-18.7 0.1-17.7 0.2-35.3-0.1-53 0-6.1-2.4-11.3-7.9-15.1zM878.3 555.9c-2.2-6.2-9.8-11.8-17.9-12-14.3-0.5-23.6 7.9-22.5 22.8 0.5 7 0.1 14 0.1 21v25c0 1.5 0 3 0.4 4.4 3.2 10.3 12.9 15.5 23.9 14 11-1.6 17.4-8.4 17.6-19.7 0.3-15.8 0.1-31.7 0.1-47.5 0-2.9-0.8-5.5-1.7-8zM352 257.8c-1.9-7.3-7.9-12.7-15.4-13.7-1.3-0.2-2.7-0.4-4-0.4-0.6 0-1.5 0.2-1.7-0.8h-28.8c-0.4 0.7-1.1 0.3-1.6 0.3-13.3 0-26.6-0.1-39.9 0.1-4.8 0-9.5 0.9-13.7 3.5-4.1 2.5-6.4 6.2-7.7 10.7-0.2 0.9 0 1.9-0.6 2.6v75.5c1 0.2 0.7 1.1 0.8 1.7 0.7 4.1 1.8 7.9 4.6 11 3.7 4.1 8.6 5.8 13.9 5.9 24.3 0.1 48.7 0.1 73 0 3.1 0 6.1-0.3 9.1-1.3 7.9-2.5 12.7-8.9 12.7-17.2v-71.9c0.1-2-0.2-4-0.7-6zM785.5 250.1c-1.9-7.3-7.9-12.7-15.4-13.7-1.3-0.2-2.7-0.4-4-0.4-0.6 0-1.5 0.2-1.7-0.8h-28.8c-0.4 0.7-1.1 0.3-1.6 0.3-13.3 0-26.6-0.1-39.9 0.1-4.8 0-9.5 0.9-13.7 3.5-4.1 2.5-6.4 6.2-7.7 10.7-0.2 0.9 0 1.9-0.6 2.6v75.5c1 0.2 0.7 1.1 0.8 1.7 0.7 4.1 1.8 7.9 4.6 11 3.7 4.1 8.6 5.8 13.9 5.9 24.3 0.1 48.7 0.1 73 0 3.1 0 6.1-0.3 9.1-1.3 7.9-2.5 12.7-8.9 12.7-17.2v-71.9c0.2-2-0.2-4.1-0.7-6zM351.4 676.6c-1.9-7.3-7.9-12.7-15.4-13.7-1.3-0.2-2.7-0.4-4-0.4-0.6 0-1.5 0.2-1.7-0.8h-28.8c-0.4 0.7-1.1 0.3-1.6 0.3-13.3 0-26.6-0.1-39.9 0.1-4.8 0-9.5 0.9-13.7 3.5-4.1 2.5-6.4 6.2-7.7 10.7-0.2 0.9 0 1.9-0.6 2.6v75.5c1 0.2 0.7 1.1 0.8 1.7 0.7 4.1 1.8 7.9 4.6 11 3.7 4.1 8.6 5.8 13.9 5.9 24.3 0.1 48.7 0.1 73 0 3.1 0 6.1-0.3 9.1-1.3 7.9-2.5 12.7-8.9 12.7-17.2v-71.9c0.1-2-0.2-4-0.7-6z" p-id="2419"></path>
            </svg> 
        </i>
    </div>
    <div class="qrcodeTooltipText q-tooltips__content q-tooltips__top" style="top: -29.8px;transform:translateX(-50%);left:50%;">作为二维码解析</div>
</div>
<style>
.qrcodeTooltipText {
  visibility: hidden;
}
#qrcodeBtn:hover .qrcodeTooltipText {
  visibility: visible;
}
</style>
`;

onLoad();

function insertBottomMenuBtn() {
  let findCount = 0;
  const findFuncMenuInterval = setInterval(() => {
    if (findCount++ > 50) {
      clearInterval(findFuncMenuInterval);
    }
    // 获取功能菜单
    const funcMenu = document.querySelector(".main-area__footer");
    if (funcMenu) {
      clearInterval(findFuncMenuInterval);

      var qrBtn = document.getElementById("qrcodeBtn");
      if (!qrBtn) {
        funcMenu.insertAdjacentHTML("beforeend", qrcodeBtn);

        qrBtn = document.querySelector("#qrcodeBtn");
        qrBtn.addEventListener("click", async () => {
          var element = document.querySelector(".main-area__image");
          try {
            var decoded = await decodeQR(element);

            await window.qr_decode.showResult(decoded);
          } catch (e) {
            console.log("[QR-Decode]", "解码失败", e);
            await window.qr_decode.showFailed(e);
          }
        });
      }
    }
  }, 100);
}

async function onLoad() {
  addMainQContextMenu();
  insertBottomMenuBtn();

  document.addEventListener("contextmenu", (event) => {
    var element = document.querySelector(".main-area__image");
    if (element == null) return;

    //如果是图片内容
    if (
      location.href.includes("/imageViewer") ||
      location.href.includes("/image-viewer")
    ) {
      var hasFound = false;
      var timer = setInterval(async () => {
        if (hasFound) return;

        // 获取右键菜单
        const qContextMenus = document.getElementsByClassName("q-context-menu");
        if (qContextMenus.length > 0 && qContextMenus[0] != null) {
          hasFound = true;
          clearInterval(timer);
        }
        const qContextMenu = qContextMenus[0];

        if (qContextMenu.querySelector(".qr-decode-menu") != null) {
          //已经插入了一次，无需重复插入
          return;
        }

        // 插入分隔线
        const separator = document.createElement("div");
        separator.classList.add("q-context-menu-separator");
        separator.setAttribute("role", "separator");
        qContextMenu.appendChild(separator);
        // 插入二维码解析
        const qrcodeElement = document.createElement("a");
        qrcodeElement.classList.add(
          "q-context-menu-item",
          "q-context-menu-item--normal",
          "qr-decode-menu"
        );
        qrcodeElement.setAttribute("aria-disabled", "false");
        qrcodeElement.setAttribute("role", "menuitem");
        qrcodeElement.setAttribute("tabindex", "-1");
        qrcodeElement.innerHTML = qrcodeHTML;
        qContextMenu.appendChild(qrcodeElement);
        // 调整右键菜单位置
        const rect = qContextMenu.getBoundingClientRect();
        if (rect.bottom > window.innerHeight) {
          qContextMenu.style.top = `${window.innerHeight - rect.height}px`;
        }
        // 添加点击事件
        qrcodeElement.addEventListener("click", async () => {
          // 先关闭右键菜单
          qContextMenu.remove();

          try {
            var decoded = await decodeQR(element);

            await window.qr_decode.showResult(decoded);
          } catch (e) {
            console.log("[QR-Decode]", "解码失败", e);
            await window.qr_decode.showFailed(e);
          }
        });
      }, 50);
    }
  });
}
