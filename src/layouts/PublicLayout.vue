<template>
    <div>
        <v-app>
            <!-- Header  -->
            <HeaderComponent />
            <!-- Main -->
            <v-main>
                <v-container style="min-height: 100vh;" class="my-10" fluid>
                    <RouterView />
                </v-container>
            </v-main>

            <!-- Footer -->
            <FooterComponent />
        </v-app>
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/public/HeaderComponent.vue';
import FooterComponent from '@/components/public/FooterComponent.vue';
</script>