<template>
<transition name="modal">
    <div @click="$emit(close)">
        <div @click.stop>
            <h3>modal</h3>
            <button @click="$emit('close')">閉じる</button>
        </div>
    </div>
</transition>
</template>
<script></script>
<style></style>
