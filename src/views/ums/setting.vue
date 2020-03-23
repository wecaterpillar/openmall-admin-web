<template> 
  <el-card class="form-container" shadow="never">
    <el-form :model="orderSetting"
             ref="orderSettingForm"

             label-width="150px">
      <el-form-item label="APPID：" prop="appid">
        <el-input v-model="orderSetting.appid" class="input-width">
        </el-input>
      </el-form-item>
      <el-form-item label="APPSECRET：" prop="appsecret">
        <el-input v-model="orderSetting.appsecret" class="input-width">
        </el-input>
      </el-form-item>
      <el-form-item label="MCHID：" prop="mchid">
        <el-input v-model="orderSetting.mchid" class="input-width">
        </el-input>
        <span class="note-margin">商户id</span>
      </el-form-item>
      <el-form-item label="paySignKey：" prop="paySignKey">
        <el-input v-model="orderSetting.paySignKey" class="input-width">
        </el-input>
        <span class="note-margin"></span>
      </el-form-item>
      <el-form-item label="notifyUrl：" prop="notifyUrl">
        <el-input v-model="orderSetting.notifyUrl" class="input-width">
        </el-input>
        <span class="note-margin">支付回调地址</span>
      </el-form-item>
            <el-form-item label="templateId1：" prop="templateId1">
              <el-input v-model="orderSetting.templateId1" class="input-width">
              </el-input>
              <span class="note-margin">下单通知模版</span>
            </el-form-item>
<el-form-item label="templateId2：" prop="templateId2">
              <el-input v-model="orderSetting.templateId2" class="input-width">
              </el-input>
              <span class="note-margin">支付成功模版</span>
            </el-form-item>
<el-form-item label="templateId3：" prop="templateId3">
              <el-input v-model="orderSetting.templateId3" class="input-width">
              </el-input>
              <span class="note-margin">取消订单模版</span>
            </el-form-item>
<el-form-item label="templateId4：" prop="templateId4">
              <el-input v-model="orderSetting.templateId4" class="input-width">
              </el-input>
              <span class="note-margin">发货通知模版</span>
            </el-form-item>


      <el-form-item>
        <el-button
          @click="confirm('orderSettingForm')"
          type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
  import {getOrderSetting,updateOrderSetting} from '@/api/ums/appletSetting';
  const defaultOrderSetting = {
    id: null,
    appid: 0,
    appsecret: 0,
    mchid: 0,
    paySignKey: 0,
    notifyUrl:0,
    templateId1:0,
    templateId2:0,
    templateId3:0,
    templateId4:0
  };
  const checkTime = (rule, value, callback) => {

  };
  export default {
    name: 'orderSetting',
    data() {
      return {
        orderSetting: Object.assign({}, defaultOrderSetting)

      }
    },
    created(){
      this.getDetail();
    },
    methods:{
      confirm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$confirm('是否要提交修改?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              updateOrderSetting(1,this.orderSetting).then(response=>{
                this.$message({
                  type: 'success',
                  message: '提交成功!',
                  duration:1000
                });
              })
            });
          } else {
            this.$message({
              message: '提交参数不合法',
              type: 'warning'
            });
            return false;
          }
        });
      },
      getDetail(){
        getOrderSetting(1).then(response=>{
          this.orderSetting=response.data;
        })
      }
    }
  }
</script>
<style scoped>
  .input-width {
    width: 50%;
  }

  .note-margin {
    margin-left: 15px;
  }
</style>


