<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link
          to="/newPage/a"
          class="list-group-item list-group-item-act"
          aria-current="true"
        >
          元件 A
        </router-link>
        <router-link
          to="/newPage/b"
          class="list-group-item list-group-item-act"
          aria-current="true"
        >
          元件 B
        </router-link>
        <router-link
          to="/newPage/namedView/cToa"
          class="list-group-item list-group-item-act"
          aria-current="true"
        >
          命名視圖 cToa
        </router-link>
        <router-link
          to="/newPage/namedView/aTob"
          class="list-group-item list-group-item-act"
          aria-current="true"
        >
          命名視圖 aTob
        </router-link>
         <router-link
          to="/newPage/dynamicRouter/3ac981ab9fb71388"
          class="list-group-item list-group-item-act"
          aria-current="true"
        >
          動態路由($route)
        </router-link>
         <router-link
          to="/newPage/dynamicRouterByProps/3ac981ab9fb71388"
          class="list-group-item list-group-item-act"
          aria-current="true"
        >
          動態路由(props)
        </router-link>
        <router-link
          to="/newPage/routerNavigation"
          class="list-group-item list-group-item-act"
          aria-current="true"
        >
          路由導覽
        </router-link>
      </div>
    </div>

    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
