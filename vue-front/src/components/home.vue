<script setup lang="ts">
import { onMounted, ref } from "vue";
import bgImg from "../assets/img/pic.jpg";

const inputText = ref<string>("");

function maker(text: string): void {
    let canvas: any = document.getElementById("canvas");
    let ctx: any = canvas.getContext("2d");
    let drawText: Array<string> = text.split('');
    let temp: string = '';
    let row: Array<string> = [];
    for (let i: any = 0; i < text.length; i++) {
        if(ctx.measureText(temp).width > 160){
            row.push(temp);
            temp = '';
        }
        temp += drawText[i];
    }
    row.push(temp);
    ctx.font="30px Noto Sans SC";
    let img: any = new Image();
    img.src = bgImg;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(10,355);
    ctx.rotate(-28 * Math.PI/ 180);
    for (let i: any = 0; i < row.length; i++) {
        ctx.fillText(row[i], 0, 0+(i+1)*30*1.2);
    }
    ctx.restore();
};

function downLoadImage(canvasId: string,name: string): void {
    let canvas: any = document.getElementById(canvasId);
    let a: any = document.createElement("a");
    a.href = canvas.toDataURL();
    a.download = name;
    a.click();
}

</script>

<template>
<div class="min-h-screen min-w-full text-center">
    <div class="py-4">
        <h1 class="text-3xl font-bold">
            Shizuku maker
        </h1>
    </div>
    <hr />
    <div class="py-3">
        <div class="flex flex-row justify-center">
            <div class="flex flex-col justify-center">
                <div class="max-w-[80vw] max-h-[55vh] text-center overflow-auto">
                    <canvas id="canvas" class="inline" width="593" height="593" />
                </div>
            </div>
        </div>
    </div>
    <hr />
    <div class="flex flex-col justify-center px-2">
        <div class="py-3">
           <input type="text" placeholder="Text here" class="input input-bordered" v-model="inputText" /> 
           <p class="text-sm">Notice: If the generated picture is empty, please try generating for a few more times! </p>
        </div>
        <div>
            <button class="btn btn-primary mx-1" v-on:click="maker(inputText)">Generate</button>
            <button class="btn btn-warning mx-1" v-on:click="inputText='';maker(inputText)">Clean</button>
            <button class="btn mx-1" v-on:click="downLoadImage('canvas','download.jpg')">Save</button>
        </div>
        <div class="py-3">
            <p>© 2022&nbsp;<a href="https://github.com/mitian233/Shizuku-Maker" class="link">Shizuku Maker</a></p>
            <p>Image Source: ©2020 プロジェクトラブライブ！虹ヶ咲学園スクールアイドル同好会</p>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>