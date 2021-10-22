<template>
    <div class="main-sidebar">
            <aside id="sidebar-wrapper">
            <div class="sidebar-brand">
                <a href="#">Admin</a>
            </div>
            <div class="sidebar-brand sidebar-brand-sm">
                <a href="#"></a>
            </div>
            <ul class="sidebar-menu">
                <li class="menu-header">Dashboard</li>
                <li class="active">
                <router-link class="nav-link" :to="{name: 'dashboard'} "><i class="fas fa-fire"></i> <span>Dashboard</span></router-link>
                </li>
                <li class="menu-header">User Setting</li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link has-dropdown"><i class="far fa-user"></i> <span>User Setting</span></a>
                    <ul class="dropdown-menu">
                    <li>
                        <router-link :to="{name: 'users'} ">Users</router-link>
                    </li>
                    </ul>
                </li> 
                <li><a class="nav-link" href="#"><i class="fas fa-pencil-ruler"></i> <span>Credits</span></a></li>
                </ul>

                <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
                <button class="btn btn-danger btn-lg btn-block btn-icon-split" @click="logout">
                    <i class="fas fa-rocket"></i> Logout
                </button>
                </div>
            </aside>
        </div>
</template>