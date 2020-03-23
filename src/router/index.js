import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: {title: '首页', icon: 'home'}
    }]
  }
]

export const asyncRouterMap = [
  {
    path: '/pms',
    component: Layout,
    redirect: '/pms/product',
    name: 'pms',
    meta: {title: '商品', icon: 'product'},
    children: [{
      path: 'product',
      name: 'product',
      component: () => import('@/views/pms/product/index'),
      meta: {title: '商品列表', icon: 'product-list'}
    },
      {
        path: 'addProduct',
        name: 'addProduct',
        component: () => import('@/views/pms/product/add'),
        meta: {title: '添加商品', icon: 'product-add'}
      },
      {
        path: 'updateProduct',
        name: 'updateProduct',
        component: () => import('@/views/pms/product/update'),
        meta: {title: '修改商品', icon: 'product-add'},
        hidden: true
      },
      {
        path: 'productCate',
        name: 'productCate',
        component: () => import('@/views/pms/productCate/index'),
        meta: {title: '商品分类', icon: 'product-cate'}
      },
      {
        path: 'addProductCate',
        name: 'addProductCate',
        component: () => import('@/views/pms/productCate/add'),
        meta: {title: '添加商品分类'},
        hidden: true
      },
      {
        path: 'updateProductCate',
        name: 'updateProductCate',
        component: () => import('@/views/pms/productCate/update'),
        meta: {title: '修改商品分类'},
        hidden: true
      },
      {
        path: 'productAttr',
        name: 'productAttr',
        component: () => import('@/views/pms/productAttr/index'),
        meta: {title: '商品类型', icon: 'product-attr'}
      },
      {
        path: 'productAttrList',
        name: 'productAttrList',
        component: () => import('@/views/pms/productAttr/productAttrList'),
        meta: {title: '商品属性列表'},
        hidden: true
      },
      {
        path: 'addProductAttr',
        name: 'addProductAttr',
        component: () => import('@/views/pms/productAttr/addProductAttr'),
        meta: {title: '添加商品属性'},
        hidden: true
      },
      {
        path: 'updateProductAttr',
        name: 'updateProductAttr',
        component: () => import('@/views/pms/productAttr/updateProductAttr'),
        meta: {title: '修改商品属性'},
        hidden: true
      },
      {
        path: 'brand',
        name: 'brand',
        component: () => import('@/views/pms/brand/index'),
        meta: {title: '品牌管理', icon: 'product-brand'}
      },
      {
        path: 'addBrand',
        name: 'addBrand',
        component: () => import('@/views/pms/brand/add'),
        meta: {title: '添加品牌'},
        hidden: true
      },
      {
        path: 'updateBrand',
        name: 'updateBrand',
        component: () => import('@/views/pms/brand/update'),
        meta: {title: '编辑品牌'},
        hidden: true
      }
    ]
  },
  {
    path: '/oms',
    component: Layout,
    redirect: '/oms/order',
    name: 'oms',
    meta: {title: '订单', icon: 'order'},
    children: [
      {
        path: 'order',
        name: 'order',
        component: () => import('@/views/oms/order/index'),
        meta: {title: '订单列表', icon: 'product-list'}
      },
      {
        path: 'orderDetail',
        name: 'orderDetail',
        component: () => import('@/views/oms/order/orderDetail'),
        meta: {title: '订单详情'},
        hidden:true
      },
      {
        path: 'deliverOrderList',
        name: 'deliverOrderList',
        component: () => import('@/views/oms/order/deliverOrderList'),
        meta: {title: '发货列表'},
        hidden:true
      },
      {
        path: 'orderSetting',
        name: 'orderSetting',
        component: () => import('@/views/oms/order/setting'),
        meta: {title: '订单设置', icon: 'order-setting'}
      },
      {
        path: 'returnApply',
        name: 'returnApply',
        component: () => import('@/views/oms/apply/index'),
        meta: {title: '退货申请处理', icon: 'order-return'}
      },
      {
        path: 'returnReason',
        name: 'returnReason',
        component: () => import('@/views/oms/apply/reason'),
        meta: {title: '退货原因设置', icon: 'order-return-reason'}
      },
      {
        path: 'returnApplyDetail',
        name: 'returnApplyDetail',
        component: () => import('@/views/oms/apply/applyDetail'),
        meta: {title: '退货原因详情'},
        hidden:true
      },
      {
        path: 'FeightTemplate',
        name: 'FeightTemplate',
        component: () => import('@/views/pms/feightTemplate/index'),
        meta: {title: '运费模版', icon: 'product-list'},
        hidden: true
      },
      {
        path: 'addFeightTemplate',
        name: 'addFeightTemplate',
        component: () => import('@/views/pms/feightTemplate/add'),
        meta: {title: '添加运费模版'},
        hidden: true
      },
      {
        path: 'updateFeightTemplate',
        name: 'updateFeightTemplate',
        component: () => import('@/views/pms/feightTemplate/update'),
        meta: {title: '编辑运费模版'},
        hidden: true
      }
    ]
  },
  {
    path: '/ums',
    component: Layout,
    redirect: '/ums/member',
    name: 'ums',
    meta: {title: '会员', icon: 'home'},
    children: [
      {
        path: 'member',
        name: 'member',
        component: () => import('@/views/ums/member/index'),
        meta: {title: '会员列表', icon: 'product-list'}
      },

      {
        path: 'addMember',
        name: 'addMember',
        component: () => import('@/views/ums/member/add'),
        meta: {title: '添加会员'},
        hidden: true
      },
      {
        path: 'updateMember',
        name: 'updateMember',
        component: () => import('@/views/ums/member/update'),
        meta: {title: '编辑会员'},
        hidden: true
      }, {
        path: 'memberLevel',
        name: 'memberLevel',
        component: () => import('@/views/ums/memberLevel/index'),
        meta: {title: '会员等级列表', icon: 'product-list'}
      },

      {
        path: 'addMemberLevel',
        name: 'addMemberLevel',
        component: () => import('@/views/ums/memberLevel/add'),
        meta: {title: '添加会员等级'},
        hidden: true
      },
      {
        path: 'updateMemberLevel',
        name: 'updateMemberLevel',
        component: () => import('@/views/ums/memberLevel/update'),
        meta: {title: '编辑会员等级'},
        hidden: true
      }, {
        path: 'memberBlanceLog',
        name: 'memberBlanceLog',
        component: () => import('@/views/ums/memberBlanceLog/index'),
        meta: {title: '积分余额日志记录', icon: 'product-list'},
        hidden: true
      }, {
        path: 'memberIntegration',
        name: 'memberIntegration',
        component: () => import('@/views/ums/memberIntegration/index'),
        meta: {title: '成长值日志记录', icon: 'product-list'},
        hidden: true
      },
      {
        path: 'appletSetting',
        name: 'appletSetting',
        component: () => import('@/views/ums/setting'),
        meta: {title: '登录支付设置', icon: 'order-setting'},
        hidden: true
      },
      {
        path: 'jifenSetting',
        name: 'jifenSetting',
        component: () => import('@/views/ums/jifensetting'),
        meta: {title: '积分设置', icon: 'order-setting'},
        hidden: true
      }
    ]
  },
  {
    path:'/sms',
    component: Layout,
    redirect: '/sms/coupon',
    name: 'sms',
    meta: {title: '营销', icon: 'sms'},
    children: [
      {
        path: 'flash',
        name: 'flash',
        component: () => import('@/views/sms/flash/index'),
        meta: {title: '秒杀活动列表', icon: 'sms-flash'}
      },
      {
        path: 'flashSession',
        name: 'flashSession',
        component: () => import('@/views/sms/flash/sessionList'),
        meta: {title: '秒杀时间段列表'},
        hidden:true
      },
      {
        path: 'selectSession',
        name: 'selectSession',
        component: () => import('@/views/sms/flash/selectSessionList'),
        meta: {title: '秒杀时间段选择'},
        hidden:true
      },
      {
        path: 'flashProductRelation',
        name: 'flashProductRelation',
        component: () => import('@/views/sms/flash/productRelationList'),
        meta: {title: '秒杀商品列表'},
        hidden:true
      },
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('@/views/sms/coupon/index'),
        meta: {title: '优惠券列表', icon: 'sms-coupon'}
      },
      {
        path: 'addCoupon',
        name: 'addCoupon',
        component: () => import('@/views/sms/coupon/add'),
        meta: {title: '添加优惠券'},
        hidden:true
      },
      {
        path: 'updateCoupon',
        name: 'updateCoupon',
        component: () => import('@/views/sms/coupon/update'),
        meta: {title: '修改优惠券'},
        hidden:true
      },
      {
        path: 'couponHistory',
        name: 'couponHistory',
        component: () => import('@/views/sms/coupon/history'),
        meta: {title: '优惠券领取详情'},
        hidden:true
      },
      {
        path: 'brand',
        name: 'homeBrand',
        component: () => import('@/views/sms/brand/index'),
        meta: {title: '品牌推荐', icon: 'product-brand'}
      },
      {
        path: 'new',
        name: 'homeNew',
        component: () => import('@/views/sms/new/index'),
        meta: {title: '新品推荐', icon: 'sms-new'}
      },
      {
        path: 'hot',
        name: 'homeHot',
        component: () => import('@/views/sms/hot/index'),
        meta: {title: '人气推荐', icon: 'sms-hot'}
      },
      {
        path: 'subject',
        name: 'homeSubject',
        component: () => import('@/views/sms/subject/index'),
        meta: {title: '专题推荐', icon: 'sms-subject'}
      },
      {
        path: 'advertise',
        name: 'homeAdvertise',
        component: () => import('@/views/sms/advertise/index'),
        meta: {title: '广告列表', icon: 'sms-ad'}
      },
      {
        path: 'addAdvertise',
        name: 'addHomeAdvertise',
        component: () => import('@/views/sms/advertise/add'),
        meta: {title: '添加广告'},
        hidden:true
      },
      {
        path: 'updateAdvertise',
        name: 'updateHomeAdvertise',
        component: () => import('@/views/sms/advertise/update'),
        meta: {title: '编辑广告'},
        hidden:true
      }
    ]
  },
  {
    path:'/sys',
    component: Layout,
    redirect: '/sys/admin',
    name: 'sys',
    meta: {title: '权限', icon: 'ums'},
    children: [
      {
        path: 'admin',
        name: 'admin',
        component: () => import('@/views/sys/admin/index'),
        meta: {title: '用户列表', icon: 'ums-admin'}
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/sys/role/index'),
        meta: {title: '角色列表', icon: 'ums-role'}
      },
      {
        path: 'allocMenu',
        name: 'allocMenu',
        component: () => import('@/views/sys/role/allocMenu'),
        meta: {title: '分配菜单'},
        hidden: true
      },
      {
        path: 'allocResource',
        name: 'allocResource',
        component: () => import('@/views/sys/role/allocResource'),
        meta: {title: '分配资源'},
        hidden: true
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/sys/menu/index'),
        meta: {title: '菜单列表', icon: 'ums-menu'}
      },
      {
        path: 'addMenu',
        name: 'addMenu',
        component: () => import('@/views/sys/menu/add'),
        meta: {title: '添加菜单'},
        hidden: true
      },
      {
        path: 'updateMenu',
        name: 'updateMenu',
        component: () => import('@/views/sys/menu/update'),
        meta: {title: '修改菜单'},
        hidden: true
      },
      {
        path: 'resource',
        name: 'resource',
        component: () => import('@/views/sys/resource/index'),
        meta: {title: '资源列表', icon: 'ums-resource'}
      },
      {
        path: 'resourceCategory',
        name: 'resourceCategory',
        component: () => import('@/views/sys/resource/categoryList'),
        meta: {title: '资源分类'},
        hidden: true
      },
      {
        path: 'dict',
        name: 'dict',
        component: () => import('@/views/sys/dict/index'),
        meta: {title: '系统代码列表', icon: 'product-list'},
        hidden: true
      },
      {
        path: 'addDict',
        name: 'addDict',
        component: () => import('@/views/sys/dict/add'),
        meta: {title: '添加代码表', icon: 'dict-add'},
        hidden: true
      },
      {
        path: 'updateDict',
        name: 'updateDict',
        component: () => import('@/views/sys/dict/update'),
        meta: {title: '修改代码表', icon: 'dict-update'},
        hidden: true
      },
      {
        path: 'webLog',
        name: 'webLog',
        component: () => import('@/views/sys/webLog/index'),
        meta: {title: '前台日志列表', icon: 'product-list'},
        hidden: true
      }, {
        path: 'adminLog',
        name: 'adminLog',
        component: () => import('@/views/sys/adminLog/index'),
        meta: {title: '后台日志列表', icon: 'product-list'},
        hidden: true
      }
    ]
  }, {
    path: '/cms',
    component: Layout,
    redirect: '/cms/help',
    name: 'cms',
    meta: {title: '内容管理', icon: 'home'},
    children: [
      {
        path: 'prefrenceArea',
        name: 'prefrenceArea',
        component: () => import('@/views/cms/prefrenceArea/index'),
        meta: {title: '偏爱专区列表', icon: 'product-list'}
      }, {
        path: 'addPrefrenceArea',
        name: 'addPrefrenceArea',
        component: () => import('@/views/cms/prefrenceArea/add'),
        meta: {title: '添加偏爱专区'},
        hidden: true
      },
      {
        path: 'updatePrefrenceArea',
        name: 'updatePrefrenceArea',
        component: () => import('@/views/cms/prefrenceArea/update'),
        meta: {title: '编辑偏爱专区'},
        hidden: true
      }
      ,
      {
        path: 'subjectCategory',
        name: 'subjectCategory',
        component: () => import('@/views/cms/subjectCategory/index'),
        meta: {title: '专题分类列表', icon: 'product-list'}
      }, {
        path: 'addSubjectCategory',
        name: 'addSubjectCategory',
        component: () => import('@/views/cms/subjectCategory/add'),
        meta: {title: '添加权限'},
        hidden: true
      },
      {
        path: 'updateSubjectCategory',
        name: 'updateSubjectCategory',
        component: () => import('@/views/cms/subjectCategory/update'),
        meta: {title: '编辑权限'},
        hidden: true
      }
      ,
      {
        path: 'subject',
        name: 'subject',
        component: () => import('@/views/cms/subject/index'),
        meta: {title: '专题列表', icon: 'product-list'}
      }, {
        path: 'addSubject',
        name: 'addSubject',
        component: () => import('@/views/cms/subject/add'),
        meta: {title: '添加专题'},
        hidden: true
      },
      {
        path: 'updateSubject',
        name: 'updateSubject',
        component: () => import('@/views/cms/subject/update'),
        meta: {title: '编辑专题'},
        hidden: true
      }
      ,
      {
        path: 'subjectComment',
        name: 'subjectComment',
        component: () => import('@/views/cms/subjectComment/index'),
        meta: {title: '专题评论列表', icon: 'product-list'}
      }, {
        path: 'addSubjectComment',
        name: 'addSubjectComment',
        component: () => import('@/views/cms/subjectComment/add'),
        meta: {title: '添加权限'},
        hidden: true
      },
      {
        path: 'updateSubjectComment',
        name: 'updateSubjectComment',
        component: () => import('@/views/cms/subjectComment/update'),
        meta: {title: '编辑权限'},
        hidden: true
      }
      ,
      {
        path: 'topicCategory',
        name: 'topicCategory',
        component: () => import('@/views/cms/topicCategory/index'),
        meta: {title: '话题分类列表', icon: 'product-list'}
      }, {
        path: 'addTopicCategory',
        name: 'addTopicCategory',
        component: () => import('@/views/cms/topicCategory/add'),
        meta: {title: '添加权限'},
        hidden: true
      },
      {
        path: 'updateTopicCategory',
        name: 'updateTopicCategory',
        component: () => import('@/views/cms/topicCategory/update'),
        meta: {title: '编辑权限'},
        hidden: true
      }
      ,
      {
        path: 'topic',
        name: 'topic',
        component: () => import('@/views/cms/topic/index'),
        meta: {title: '话题列表', icon: 'product-list'}
      }, {
        path: 'addTopic',
        name: 'addTopic',
        component: () => import('@/views/cms/topic/add'),
        meta: {title: '添加权限'},
        hidden: true
      },
      {
        path: 'updateTopic',
        name: 'updateTopic',
        component: () => import('@/views/cms/topic/update'),
        meta: {title: '编辑权限'},
        hidden: true
      }
      ,
      {
        path: 'topicComment',
        name: 'topicComment',
        component: () => import('@/views/cms/topicComment/index'),
        meta: {title: '话题评论列表', icon: 'product-list'}
      }
      ,
      {
        path: 'memberReport',
        name: 'memberReport',
        component: () => import('@/views/cms/memberReport/index'),
        meta: {title: '用户报告列表', icon: 'product-list'}
      }, {
        path: 'addMemberReport',
        name: 'addMemberReport',
        component: () => import('@/views/cms/memberReport/add'),
        meta: {title: '添加权限'},
        hidden: true
      },
      {
        path: 'updateMemberReport',
        name: 'updateMemberReport',
        component: () => import('@/views/cms/memberReport/update'),
        meta: {title: '编辑权限'},
        hidden: true
      }
      ,
      {
        path: 'helpCategory',
        name: 'helpCategory',
        component: () => import('@/views/cms/helpCategory/index'),
        meta: {title: '帮助分类列表', icon: 'product-list'}
      }, {
        path: 'addHelpCategory',
        name: 'addHelpCategory',
        component: () => import('@/views/cms/helpCategory/add'),
        meta: {title: '添加帮助分类'},
        hidden: true
      },
      {
        path: 'updateHelpCategory',
        name: 'updateHelpCategory',
        component: () => import('@/views/cms/helpCategory/update'),
        meta: {title: '编辑帮助分类'},
        hidden: true
      }
      ,
      {
        path: 'help',
        name: 'help',
        component: () => import('@/views/cms/help/index'),
        meta: {title: '帮助列表', icon: 'product-list'}
      }, {
        path: 'addHelp',
        name: 'addHelp',
        component: () => import('@/views/cms/help/add'),
        meta: {title: '添加帮助'},
        hidden: true
      },
      {
        path: 'updateHelp',
        name: 'updateHelp',
        component: () => import('@/views/cms/help/update'),
        meta: {title: '编辑帮助'},
        hidden: true
      }

    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

