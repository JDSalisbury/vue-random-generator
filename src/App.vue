<template>
  <v-app>
    <AppBar>
      <v-main>
        <Home />
      </v-main>
    </AppBar>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar';
import Home from '@/views/Home';
export default {
  name: 'app',
  components: {
    AppBar,
    Home
  }
};
</script>

<style></style>
