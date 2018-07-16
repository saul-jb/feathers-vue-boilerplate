<template>
	<Page class="page">
		<ActionBar class="action-bar" title="Counter" />

		<StackLayout>
			<FlexboxLayout flexDirection="row" justifyContent="center">
				<Button @tap="decrement" text="-" class="btn btn-outline"/>
				<Label :text="message" alignSelf="baseline" class="h2"/>
				<Button @tap="increment" text="+" class="btn btn-outline"/>
			</FlexboxLayout>
			<Image width="200" height="200" v-if="surprise" src="~/images/NativeScript-Vue.png"/>
		</StackLayout>
	</Page>
</template>

<script>
	import { mapActions } from "vuex";

	export default {
		data () {
			return {
				lat: -36,
				lng: 174
			};
		},

		computed: {
			message () {
				return this.$store.state.counter.count.toString();
			},

			messageNum () {
				return this.$store.state.counter.count;
			},

			surprise () {
				return (this.$store.state.counter.count >= 5);
			}
		},

		methods: {
			...mapActions([
				"decrement",
				"increment"
			])
		}
	};
</script>
