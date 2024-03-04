<template>
	<div class="min-h-screen">
		<NavBar />
		<router-view></router-view>
		<Footer class="sticky top-[100vh]" />
	</div>
</template>

<script setup lang="ts">
	import NavBar from './components/NavBar.vue';
	import Footer from './components/Footer.vue';
</script>

<style></style>
