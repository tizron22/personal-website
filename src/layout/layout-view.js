app.component('layoutView', {
    setup() {
        const leftDrawerOpen = ref(false);
        const miniState = ref(true);

        function toggleLeftDrawer(){
            leftDrawerOpen.value = !leftDrawerOpen.value
        }

        const links = [{name: 'Home', link: { name: 'Home' } }];

        return {leftDrawerOpen, miniState, toggleLeftDrawer, links};

    },
    /*html*/
    template: `
        <q-layout view="hHh LpR fFf">
            <q-header bordered class="bg-white text-light-blue-9">
                <q-toolbar>
                    <q-btn flat dense icon="menu" @click="toggleLeftDrawer" />
                    <q-toolbar-title class="tw-font-bold">Header</q-toolbar-title>
                </q-toolbar>
            </q-header>

            <q-drawer
            show-if-above
            v-model="leftDrawerOpen"
            side="left"
            @mouseover="miniState = false"
            @mouseout="miniState = true"
            bordered
            :width="180"
            >
                <q-scroll-area class="fit">
                    <q-item v-for="link in links" :key="link.name" v-ripple :to="link.link" active-class="text-primary tw-border-l-2 tw-border-primary">
                        <q-item-section class="text-bold"> {{ link.name }} </q-item-section>
                    </q-item>
                </q-scroll-area>

            </q-drawer>

            <q-page-container class="content-area">
                <router-view/>
            </q-page-container>
        </q-layout>
`,
});