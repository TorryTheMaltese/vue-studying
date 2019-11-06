<template>
    <table>
        <tr-component v-for="(rowData, index) in tableData" :key="index" :rowData="rowData" :row-index="index"></tr-component>
    </table>
</template>

<script>
    import TrComponent from './TrComponent';

    export default {
        props: {
            tableData: Array
        },
        components: {
            TrComponent
        }
    }
</script>

<style></style>