(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{283:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{loading:!0}},computed:{userList:function(){return this.$store.getters.getUserList},activeUser:function(){return this.$store.getters.getActiveUser}},methods:{selectUser:function(t,e){this.$emit("userSelected",{userId:t,userName:e})}},watch:{activeUser:function(t){t&&t.id&&(this.loading=!1)},userList:function(t){t.length&&this.activeUser&&this.activeUser.id&&(this.loading=!1)}},mounted:function(){this.activeUser&&this.activeUser.id&&(this.loading=!1)}},c=r(47),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-1/4 h-full"},[t.loading?e("div",{staticClass:"flex items-center justify-center h-dvh"},[e("div",{staticClass:"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black",attrs:{role:"status"}}),t._v(" "),e("span",{staticClass:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"},[t._v("Loading...")])]):e("div",{staticClass:"h-full"},[e("div",{staticClass:"bg-neutral-200 rounded-lg m-2"},[e("div",{staticClass:"p-2 text-center"},[e("img",{attrs:{src:"https://tools-api.webcrumbs.org/image-placeholder/32/32/user/".concat(t.activeUser.id),alt:""}}),t._v(" "),e("p",{staticClass:"font-light text-sm"},[t._v("Текущий пользователь")]),t._v(" "),e("p",{staticClass:"font-medium text-xl"},[t._v(t._s(t.activeUser.username))])])]),t._v(" "),t._m(0),t._v(" "),e("ul",{staticClass:"space-y-2"},t._l(t.userList,(function(r){return e("li",{key:r.id,staticClass:"flex items-center space-x-4 mx-3 hover:bg-neutral-300 hover:p-1 hover:rounded-md cursor-pointer",on:{click:function(e){return t.selectUser(r.id,r.username)}}},[e("img",{staticClass:"w-8 h-8 rounded-full object-cover",attrs:{src:"https://tools-api.webcrumbs.org/image-placeholder/32/32/user/".concat(r.id),alt:"user".concat(r.id)}}),t._v(" "),e("span",{staticClass:"p-2"},[t._v(t._s(r.username))])])})),0)])])}),[function(){var t=this._self._c;return t("h3",{staticClass:"font-title text-lg mb-4 w-full border-b"},[t("p",{staticClass:"ml-2"},[this._v("Друзья")])])}],!1,null,null,null);e.default=component.exports}}]);