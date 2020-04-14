<template> 
  <el-card class="form-container" shadow="never">

    <el-form :model="member" :rules="rules" ref="memberFrom" label-width="150px">

      <el-form-item label="id：" prop="id" >
        <el-input v-model="member.id" readonly="true" ></el-input>
      </el-form-item>

      <el-form-item label="用户名：" prop="name">
        <el-input v-model="member.username" ></el-input>
      </el-form-item>

      <el-form-item label="昵称：">
        <el-input v-model="member.nickname"  ></el-input>
      </el-form-item>

      <el-form-item label="性别" label-width="">
        <el-radio-group v-model="member.gender"  >
          <el-radio :label="0">未知</el-radio>
          <el-radio :label="1">男</el-radio>
          <el-radio :label="2">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="手机号码：" >
        <el-input v-model="member.phone"  ></el-input>
      </el-form-item>

      <el-form-item label="帐号启用状态：" >
        <el-switch
          :active-value="1"
          :inactive-value="0"
          v-model="member.status" >
        </el-switch>
      </el-form-item>

      <el-form-item label="注册时间：" >
        <el-date-picker type="datetime" readonly="true"  v-model="member.createTime" placeholder="选择结束时间" value-format="yyyy-MM-dd HH:mm:ss"    style="width: 100%;"></el-date-picker>
      </el-form-item>

      <el-form-item label="城市：" >
        <el-input v-model="member.city" ></el-input>
      </el-form-item>

      <el-form-item label="积分：" >
        <el-input v-model="member.integration"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="success" class="btn-success" @click="$router.back(-1)">返回</el-button>
        <el-button v-if="isEdit" type="primary" @click="onSubmit('memberFrom')">提交</el-button>
<!--        <el-button v-if="isEdit" @click="resetForm('memberFrom')">重置</el-button>-->
      </el-form-item>

    </el-form>

  </el-card>

</template>

<script>
  import {createMember, getMember, updateMember} from '@/api/ums/member'
  const defaultMember={
      name: ''
  };
  export default {
    name: 'MemberDetail',
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        member:Object.assign({}, defaultMember),
        /*rules: {
          name: [
            {required: true, message: '请输入品牌名称', trigger: 'blur'},
            {min: 2, max: 140, message: '长度在 2 到 140 个字符', trigger: 'blur'}
          ],
          logo: [
            {required: true, message: '请输入品牌logo', trigger: 'blur'}
          ],
          sort: [
            {type: 'number', message: '排序必须为数字'}
          ],
        }*/
      }
    },
    created() {
      if (this.isEdit) {
        getMember(this.$route.query.id).then(response => {
          this.member = response.data;
        });
      }else{
        this.member = Object.assign({},defaultMember);
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$confirm('是否提交数据', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              if (this.isEdit) {
                updateMember(this.$route.query.id, this.member).then(response => {
                  this.$refs[formName].resetFields();
                  this.$message({
                    message: '修改成功',
                    type: 'success',
                    duration:1000
                  });
                  this.$router.back();
                });
              } else {
                createMember(this.member).then(response => {
                  this.$refs[formName].resetFields();
                  this.member = Object.assign({},defaultMember);
                  this.$message({
                    message: '提交成功',
                    type: 'success',
                    duration:1000
                  });
                });
              }
            });

          } else {
            this.$message({
              message: '验证失败',
              type: 'error',
              duration:1000
            });
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.member = Object.assign({},defaultMember);
      }
    }
  }
</script>
<style>
</style>


