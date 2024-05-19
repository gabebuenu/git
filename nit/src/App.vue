<template>
	<div class="app">
		<!-- Sidebar -->
		<Navbar />

		<!-- Content -->
		<router-view />
	</div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
