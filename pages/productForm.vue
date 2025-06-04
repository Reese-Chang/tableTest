<template>
    <div style="max-height: 100vh; overflow: hidden;">
        <el-table
            class="tableBox"
            ref="multipleTable"
            :data="showProduct"
            tooltip-effect="dark">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column type="selection" width="30"></el-table-column>
            <!-- DEV NOTE: 20250530 產品詳情 -->
            <el-table-column type="expand" width="10">
                <template #default="props">
                    <el-form label-position="left" inline class="detailBox">
                        <div>
                            <span>{{ props.row.category }}</span>
                            <span>產品：{{ props.row.name }}</span>
                            <span>淨額：{{ grossProfit(props.row.price, props.row.cost, props.row.sold) }}</span>
                            <span>{{ tag(props.row.status) }}</span>
                        </div>
                        <div>
                            <span>成本：{{ toCurrency(props.row.cost) }}</span>
                            <span>售價：{{ toCurrency(props.row.price) }}</span>
                            <span>毛利：{{ grossProfit(props.row.price, props.row.cost) }}</span>
                        </div>
                        <div>
                            <span>進貨數量：{{ props.row.stockIn }}</span>
                            <span>銷售數量：{{ props.row.sold }}</span>
                            <span>剩餘庫存：{{ props.row.quantity }}</span>
                        </div>
                    </el-form>
                </template>
            </el-table-column>
            <!-- DEV NOTE: 20250530 產品略述 -->
            <el-table-column prop="name" label="產品" width="220"></el-table-column>
            <el-table-column prop="category" label="類別" width="220"></el-table-column>
            <el-table-column prop="price" label="售價" width="120" sortable></el-table-column>
            <el-table-column prop="sold" label="銷售數量" width="120" sortable></el-table-column>
            <el-table-column prop="quantity" label="庫存" width="120" sortable></el-table-column>
            <el-table-column prop="status" label="狀態" width="120" sortable>
                <template #default="scope">
                    <el-tag type="success" v-if="scope.row.status == 'active'">
                        {{ tag(scope.row.status) }}
                    </el-tag>
                    <el-tag type="danger" v-else>{{ tag(scope.row.status) }}</el-tag>
                </template>
            </el-table-column>
        </el-table>
        <div>測試123</div>
        <!-- DEV NOTE: 20250601 頁碼 -->
        <div class="pageNumBox">
            <el-pagination
                layout="prev, pager, next"
                :page-size="15"
                :total=allProduct.length
                @current-change="handleCurrentChange">
            </el-pagination>
        </div>
    </div>
</template>
<script setup>
import allProduct from '@/data/allProduct'
import { ref } from 'vue'
const showProduct = ref(allProduct.slice(0,15)) 

// DEV NOTE: 20250601 轉換成貨幣格式
function toCurrency(val) {
    if (!val) return '0'
    return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
// DEV NOTE: 20250530 毛利
function grossProfit(price, cost, num) {
    // 總毛利額
    if(num) {
        return toCurrency((price - cost)*num)
    }
    // 單筆毛利
    else {
        return toCurrency(price - cost)
    }
}
// DEV NOTE: 20250601 每頁抓15筆資料
function handleCurrentChange(val) {
    if(val == 1) {
        showProduct.value = allProduct.slice(0,15)
    }else {
        showProduct.value = allProduct.slice((val-1)*15,val*15)
    }
}
// DEV NOTE: 20250601 停賣/販售中 標籤
function tag(val) {
    if(val == 'active') {
        return '販售中'
    }else {
        return '停賣'
    }
}
</script>
<style>
.tableBox {
    height: 90vh;
    overflow: scroll;
    width:100%
}
.cell {
    padding: 0px !important;
    text-align: center;
}
.detailBox {
    padding-left: 100px;
    div {
        margin-bottom: 10px;
        display: flex;
        gap: 24px;
    }
    span {
        min-width: 120px;
    }
}
/* DEV NOTE: 20250601 拿掉table底線 */
.el-table--border::after, .el-table--group::after, .el-table::before{
    opacity: 0;
}
.pageNumBox {
    text-align: center;
    margin: 20px;
}
</style>