<template>
	<v-app id="inspire">
		<v-main>
			<section class="home-hero">
				<v-container fluid fill-height class="home-hero__content">
					<v-row>
						<v-col class="home-hero__content-text">
							<p style="font-size: 56px; font-weight: 900;">Rin Happy Birthday</p>
							<p style="font-size: 28px; font-weight: 300;">2022.08.07</p>
						</v-col>
					</v-row>
				</v-container>
			</section>

			<div class="bg">
				<v-container>
					<v-row>
						<v-col v-for="n in 12" :key="n" cols="6">
							<div class="cardtest">

								<v-card height="300px" @click.stop="dialog = true" color="rgb(255, 255, 255, 0.85)">
									<v-container>
										<v-row class="home-about__contents">
											<v-col md="5">
												<v-img src="~@/assets/twittericon/hollyhock0518.jpg" max-height="60" max-width="60"></v-img>
											</v-col>
											<v-col md="5" class="home-about__contents-text">
												<v-card-title>{{ title }}</v-card-title>
											</v-col>
										</v-row>
									</v-container>

									<v-divider></v-divider>
									<v-card-text>{{ content }}</v-card-text>
								</v-card>

								<v-dialog v-model="dialog" scrollable max-width="80%" :retain-focus="false">
									<v-card>
										<v-card-title>{{ title }}</v-card-title>
										<v-divider></v-divider>
										<v-card-text height="300px">{{ content }}</v-card-text>
										<v-card-actions>
											<v-spacer></v-spacer>
											<v-btn color="primary" text @click="dialog = false">
												閉じる
											</v-btn>
										</v-card-actions>
									</v-card>
								</v-dialog>
							</div>
						</v-col>
					</v-row>
				</v-container>
			</div>
		</v-main>
	</v-app>
</template>

<style lang="scss" scoped>
.cardtest {
	max-width: 100%;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.home-hero__content {
	background: url("~@/assets/top.jpg");
	background-size: cover;
	background-position: center center;
	width: 100%;
	height: 50vh;

	&-text {
		background-color: rgba(0, 0, 0, 0.3);
		color: rgb(255, 255, 255);
		text-stroke: 1px rgb(129, 205, 255);
		-webkit-text-stroke: 1px rgb(129, 205, 255);
		text-align: center;
	}
}

.bg {
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-attachment: fixed;
	background-size: cover;
	background-image: linear-gradient(0deg, transparent 0 60%, rgba(250, 102, 255, 0.4)), url("~@/assets/back.jpg");
}
</style>

<script>
export default {
	name: "CardTest",
	data() {
		return {
			title: "名前",
			content:
				"メッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテスト",
			dialog: false,
		};
	},
	// computed: {
	//   shortenedContent: function () {
	//     let maxlength = 100;
	//     if (this.content.length <= maxlength) {
	//       return this.content;
	//     } else {
	//       return this.content.substr(0, maxlength - 10) + "...(続きを読む）";
	//     }
	//   },
	// },
};
</script>