<template>
	<div class="container m-auto">
		<div v-if="post" class="w-2/3 m-auto">
			<h1 class="text-2xl mb-8">{{ post.title }}</h1>
			<div v-html="post?.content.html" class="space-y-4"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import axios from 'axios';
	import {onMounted, ref} from 'vue';
	import {useRoute} from 'vue-router';
	const url = `http://localhost:2525/api/blog`;
	const route = useRoute();
	const post = ref('');
	async function getBlogPostBySlug() {
		const {data} = await axios.get(`${url}/${route.params.slug}`);
		post.value = data;
		console.log('🚀 ~ getBlogPostBySlug ~ data:', data);
	}
	onMounted(async () => {
		await getBlogPostBySlug();
		console.log(post.value);
	});
</script>

<style scoped></style>
