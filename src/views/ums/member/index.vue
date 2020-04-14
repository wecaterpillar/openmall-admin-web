<template> 
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
        <div>
          <i class="el-icon-search"></i>
          <span>筛选搜索</span>
          <el-button
            style="float: right"
            @click="searchMemberList()"
            type="primary"
            size="small">
            查询结果
          </el-button>
        </div>
        <div style="margin-top: 15px">
          <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
            <el-form-item label="输入搜索：">
              <el-input style="width: 203px" v-model="listQuery.keyword" placeholder="会员名称/关键字"></el-input>
            </el-form-item>
          </el-form>
        </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>

    </el-card>
    <div class="table-container">
      <el-table ref="brandTable"
                :data="list"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                v-loading="listLoading"
                border>

        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="编号" width="180" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="用户账号" width="180" align="center">
          <template slot-scope="scope">{{scope.row.username}}</template>
        </el-table-column>
        <el-table-column label="用户昵称" align="center">
          <template slot-scope="scope">{{scope.row.nickname}}</template>
        </el-table-column>
        <el-table-column label="电话号码" align="center">
          <template slot-scope="scope">{{scope.row.phone}}</template>
        </el-table-column>
        <!--<el-table-column label="生日" " align="center">
          <template slot-scope="scope">{{scope.row.birthday }}</template>
        </el-table-column>-->
        <el-table-column label="城市"  align="center">
          <template slot-scope="scope">{{scope.row.city}}</template>
        </el-table-column>
        <el-table-column label="积分"  align="center">
          <template slot-scope="scope">{{scope.row.integration}}</template>
        </el-table-column>

        <el-table-column label="注册时间"  align="center">
          <template slot-scope="scope">{{scope.row.createTime | formatTime}}</template>
        </el-table-column>
        <el-table-column label="帐号启用状态" width="100" align="center">
          <<template slot-scope="scope">
            <el-switch
              @change="updateUseStatus(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.status">
            </el-switch>
          </template>
        </el-table-column>


<!--
        <el-table-column label="是否显示" width="100" align="center">
          <template slot-scope="scope">
            <el-switch
              @change="handleUseStatus(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.status">
            </el-switch>
          </template>
        </el-table-column>-->

        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleShowMember(scope.$index, scope.row)">查看
            </el-button>
            <el-button
              size="mini"
              @click="handleUpdate(scope.$index, scope.row)">编辑
            </el-button>
            <!--<el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>-->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="batch-operate-container">

    </div>
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :page-size="listQuery.pageSize"
        :page-sizes="[5,10,15]"
        :current-page.sync="listQuery.pageNum"
        :total="total">
      </el-pagination>
    </div>
    <el-dialog
      title="用户信息"
      :visible.sync="memberInfo.dialogVisible"
      width="40%">
      <el-form  label-width="150px">
        <el-form-item label="用户名：" prop="name">
          <span>{{memberInfo.username}}</span>
        </el-form-item>

        <el-form-item label="昵称：">
          <span>{{memberInfo.nickname}}</span>
        </el-form-item>

        <el-form-item label="性别:" >
          <el-radio-group v-model="memberInfo.gender" >
            <el-radio :label="0">未知</el-radio>
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>

        </el-form-item>

        <el-form-item label="手机号码：" >
          <span>{{memberInfo.phone}}</span>
        </el-form-item>

        <el-form-item label="帐号启用状态：" >
          <el-switch
            :active-value="1"
            :inactive-value="0"
            v-model="memberInfo.status" >
          </el-switch>
        </el-form-item>

        <el-form-item label="注册时间：" >
          <span>{{memberInfo.createTime| formatTime}}</span>
        </el-form-item>

        <el-form-item label="城市：" >
          <span>{{memberInfo.city}}</span>
        </el-form-item>

        <el-form-item label="积分：" >
          <span>{{memberInfo.integration}}</span>
        </el-form-item>

        <span slot="footer" class="dialog-footer">
          <el-button @click="memberInfo.dialogVisible = false">取 消</el-button>
        </span>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  import {formatDate} from '@/utils/date';
  import {fetchList, updateUseStatus , updateFactoryStatus, deleteMember,fetchBlanceList} from '@/api/ums/member'

  export default {
    name: 'memberList',
    data() {
      return {
        memberInfo:{
            dialogVisible:false,
            username:'',
            nickname:'',
            gender:'0',
            phone:'',
            status:'',
            createTime:'',
            city:'',
            integration:''
        },
        dialogVisible:false,
        blanceList:null,
        operates: [
          {
            label: "显示",
            value: "showMember"
          },
          {
            label: "隐藏",
            value: "hideMember"
          }
        ],
        operateType: null,
        listQuery: {
          keyword: null,
          pageNum: 1,
          pageSize: 10
        },
        list: null,
        total: null,
        listLoading: true,
        multipleSelection: []
      }
    },
    created() {
      this.getList();
    },
    filters:{
      formatTime(time) {
        if(time==null||time===''){
          return 'N/A';
        }
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      },
      formatStatus(status){
        for(let i=0;i<defaultStatusOptions.length;i++){
          if(status===defaultStatusOptions[i].value){
            return defaultStatusOptions[i].label;
          }
        }
      },
      formatReturnAmount(row){
        return row.productRealPrice*row.productCount;
      }
    },
    methods: {
     getList() {
        this.listLoading = true;
        fetchList(this.listQuery).then(response => {
          this.listLoading = false;
          this.list = response.data.list;
          this.total = response.data.total;
          this.totalPage = response.data.pages;
          this.pageSize = response.data.size;
        });
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleUpdate(index, row) {
        this.$router.push({path: '/ums/updateMember', query: {id: row.id}})
      },
      handleShowMember(index, row) {
          this.memberInfo.dialogVisible=true;
          this.memberInfo.username=row.username;
          this.memberInfo.nickname=row.nickname;
          this.memberInfo.gender=row.gender;
          this.memberInfo.phone=row.phone;
          this.memberInfo.status=row.status;
          this.memberInfo.createTime=row.createTime;
          this.memberInfo.city=row.city;
          this.memberInfo.integration=row.integration;
      },
      handleDetail(index, row) {
        this.$router.push({path: '/ums/detailMember', query: {id: row.id}})
      },
      handleDelete(index, row) {
        this.$confirm('是否要删除该记录', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteMember(row.id).then(response => {
            this.$message({
              message: '删除成功',
              type: 'success',
              duration: 1000
            });
            this.getList();
          });
        });
      },

      getProductList(index, row) {
        console.log(index, row);
      },
      getProductCommentList(index, row) {
        console.log(index, row);
      },
      handleFactoryStatusChange(index, row) {
        var data = new URLSearchParams();
        data.append("ids", row.id);
        data.append("factoryStatus", row.factoryStatus);
        updateFactoryStatus(data).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        }).catch(error => {
          if (row.factoryStatus === 0) {
            row.factoryStatus = 1;
          } else {
            row.factoryStatus = 0;
          }
        });
      }, updateUseStatus(index, row) {
        let data = new URLSearchParams();
        ;
        data.append("id", row.id);
        data.append("status", row.status);
        updateUseStatus(data).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        }).catch(error => {
          if (row.showStatus === 0) {
            row.showStatus = 1;
          } else {
            row.showStatus = 0;
          }
        });
      },
      handleSizeChange(val) {
        this.listQuery.pageNum = 1;
        this.listQuery.pageSize = val;
        this.getList();
      },
      handleCurrentChange(val) {
        this.listQuery.pageNum = val;
        this.getList();
      },
      searchMemberList() {
        this.listQuery.pageNum = 1;
        this.getList();
      },
      handleBatchOperate() {
        console.log(this.multipleSelection);
        if (this.multipleSelection < 1) {
          this.$message({
            message: '请选择一条记录',
            type: 'warning',
            duration: 1000
          });
          return;
        }
        let showStatus = 0;
        if (this.operateType === 'showMember') {
          showStatus = 1;
        } else if (this.operateType === 'hideMember') {
          showStatus = 0;
        } else {
          this.$message({
            message: '请选择批量操作类型',
            type: 'warning',
            duration: 1000
          });
          return;
        }
        let ids = [];
        for (let i = 0; i < this.multipleSelection.length; i++) {
          ids.push(this.multipleSelection[i].id);
        }
        let data = new URLSearchParams();
        data.append("ids", ids);
        data.append("showStatus", showStatus);
        updateUseStatus(data).then(response => {
          this.getList();
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        });
      },
      addMember() {
        this.$router.push({path: '/pms/addMember'})
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>


</style>


