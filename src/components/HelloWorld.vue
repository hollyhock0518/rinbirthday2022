<template>
	<v-app id="inspire">
		<v-main>
			<section class="home-hero">
				<v-container fluid fill-height class="home-hero__content">
					<v-row>
						<v-col class="home-hero__content-text">
							<p style="font-size: 48px; font-weight: 900;">Rin Happy Birthday</p>
							<p style="font-size: 28px; font-weight: 300;">2022.08.07</p>
						</v-col>
					</v-row>
				</v-container>
			</section>

			<div class="bg">
				<v-container>
					<v-row>
						<v-col v-for="member in members" :key="member" cols="12" xl="3" lg="6" md="6" sm="6">
							<div class="cardtest">

								<v-card class="msg-box" height="200px" @click.stop="member.dialog = true"
									color="rgb(255, 255, 255, 0.85)">
									<v-container>
										<v-row>
											<v-col cols="2">
												<v-img :src="member.icon"></v-img>
											</v-col>
											<v-col cols="10">
												<v-card-title class=".text-sm-h5">{{ member.name }} より</v-card-title>
											</v-col>
										</v-row>
									</v-container>

									<v-divider></v-divider>
									<v-card-text class="msg-1">{{ member.message }}</v-card-text>
								</v-card>

								<v-dialog v-model="member.dialog" scrollable max-width="800px" :retain-focus="false">
									<v-card>
										<v-container>
											<v-row>
												<v-col cols="2">
													<v-img :src="member.icon"></v-img>
												</v-col>
												<v-col cols="10">
													<v-card-title>{{ member.name }} より</v-card-title>
												</v-col>
											</v-row>
										</v-container>
										<v-divider></v-divider>
										<v-card-text class="msg-2" height="300px">{{ member.message }}</v-card-text>
										<v-card-actions>
											<v-spacer></v-spacer>
											<v-btn color="primary" text @click="member.dialog = false">
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

.msg-1 {
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
	padding-bottom: 0;
	font-size: 18px;
}

.msg-2 {
	white-space: pre-wrap;
	font-size: 18px;
}
</style>

<script>
export default {
	data() {
		return {
			members: [
				{ dialog: false, name: "神条りゅーと", icon: require("@/assets/twittericon/SuHAU8MSozAAH6q.jpg"), message: "りんちゃんお誕生日おめでとうございます、自分がりんちゃんを知って初めてのお誕生日を祝させてもらいます。\nこれからもりんちゃんも体調に気を付けて皆を癒してくださいね大好きです❤️(*￣∇￣*)" },
				{ dialog: false, name: "鷺沢(sagisawa)", icon: "", message: "お誕生日おめでとう🎉\nまだりんちゃんと出会って短いけれど、あっという間に、自分の中でとても夢中になれる存在になっていったよ。\n応援したいって気持ちがどんどん込み上げてくるんだ。\n自分で決めたことが足枷になって、他の人たちより出来ることは少ないけれど、精一杯コメントで気持ちを伝えていくね。\n出会えた事を本当に嬉しく思ってる。辛いことがたくさんあったことも話してくれてたね。それでも負けずにVtuberとして活躍し続けてくれてありがとう。\n配信が楽しいって話してる姿を見て、きっとこれからも進化していくりんちゃんを見れるんだろうって楽しみ。\n季節の行事はもちろん、りんちゃんの成長も楽しみにしているよ。\n今はりんちゃんに恋してる。大好きです。心から愛しています。これからも一緒に居てほしいと思ってるよ。" },
				{ dialog: false, name: "鷺沢_sagisawa", icon: "", message: "お誕生日おめでとう🎉🎂🎁\nそして活動16ヶ月もおめでとうだね♪\nりんちゃん自身の配信やくまぽんずコラボから、色んなりんちゃんを知ったよ。\nたくさんの時間を経て、1年前のりんちゃんより、ぐんとパワーアップしているんじゃないかな？\nはちさんたちも、りんちゃんと出会えた事で変われた部分はきっとあるはずだよ。\n僕もそのうちの1人。りんちゃんに出会えて本当によかった♪ 今は毎日が楽しいよ。\nこれからもずっと応援していくね！配信でも話していたけれど、まだ今年中だけでもたくさん行事はあるから、その1つ1つをりんちゃんと楽しく過ごせたらきっとすごく幸せだなって考えてる。\n\n駆け出しのはちさんだけれど、りんちゃんのこと大好きだよ！いつも元気をたくさんくれてありがとう☆\nこれからも末長くよろしくね！\n\nこの先のりんちゃんの進む道が、これまでの苦労に見合った良きものとなりますように…" },
				{ dialog: false, name: "ジノネコ", icon: require("@/assets/twittericon/jinoneko3.jpg"), message: "りんちゃんお誕生日おめでとう！これからもりんちゃんを応援して支えていくからね！" },
				{ dialog: false, name: "シンジロー", icon: require("@/assets/twittericon/KTAHkD6fwTeSxbo.jpg"), message: "りんちゃん お誕生日おめでとうございます！🎉🎂🎉\n1on1でお話出来てうれしかったよ！\nこれからも応援していくので宜しくね！\n次はクラファンかな？全力で応援するからね！" },
				{ dialog: false, name: "はる", icon: require("@/assets/twittericon/rinchanaisitai_.jpg"), message: "りんちゃん！！お誕生日おめでとう！！\n生まれてきてくれてありがとう！( *´꒳`* )\nいつも癒してくれてありがとう！\nりんちゃんにあえて私は幸せだよ♡これからもずっとずっと大好きです♡\nこれからも体調に気をつけて配信頑張ってね！！" },
				{ dialog: false, name: "†エルゼン†【バカ】", icon: require("@/assets/twittericon/fairy_hachisan.jpg"), message: "誕生日おめでとう！！\n僕はこの誕生日がりんちゃんの誕生日を初めてお祝いする機会だけど、配信では二回目の誕生日なんだよね。　もっと早く知っていれば…グヌヌ…\n\n879.2歳、おめでとう！" },
				{ dialog: false, name: "rokuku", icon: require("@/assets/twittericon/rokuku_rin.jpg"), message: "りんりんお誕生日おめでとう！！！\n去年は今年もりんの誕生日に付き添う約束をして、できたよ！\nこの1年もいろいろなことお疲れ様でした！これからもずっとりんに添っているよ~~\n\n大好き大好き！！！♡♡" },
				{ dialog: false, name: "彼岸の兔子", icon: require("@/assets/twittericon/Rabbit_DaiSuKii.jpg"), message: "お誕生日おめでとうございます。時間が経つのは速いですね。\nいつのまにか凛ちゃんと付き合ってそんなに経ってしまった。\n前年の凛ちゃんの誕生日、凛ちゃんは天使のように私の元に降りてきた。\n今日もこの誕生日を一緒に楽しく過ごしてね。毎日楽しく過ごさなければなりません。\n私は凛ちゃんを愛しています。永遠に愛しています。\nずっと離れないよ。\n一生あなたが好きです。\n小凛最可爱了。りんちゃんはウサギがこの世で一番好きな人です。\n生日快乐呀～りんりん" },
				{ dialog: false, name: "かつあん", icon: require("@/assets/twittericon/label0121.jpg"), message: "誕生日おめでとうございます\nりんさんにとってより良い一年になりますようにお祈り申し上げます" },
				{ dialog: false, name: "河東みさき", icon: require("@/assets/twittericon/katoumisaki02.jpg"), message: "りんちゃん、お誕生日おめでとうございます！体制が整うまで、大変だった事を聴いてたけど良く頑張りましたね！（偉い^ ^\nりんちゃんのこれからが、更に明るくて楽しいものになる事を祈ってます(о´∀`о)\nりんちゃんの笑顔なら、沢山の人を照らせますよ☆" },
				{ dialog: false, name: "熊の中の人", icon: "", message: "りんさんへ、誕生日おめでとうございます🎉このような形でりんさんをお祝い出来て嬉しく思います。りんさんの声は可愛らしく、反応も観ていて微笑ましく、そんなりんさんと出会えて良かったと思ってます。ASMRでは心地よく眠れる時間をありがとうございます。\n\nこれからも貴女の歩む道が暖かな想いで満たされ、貴女と出会う人が幸せになれることを願ってお祝いを申し上げます。改めて、お誕生日おめでとう🎊" },
				{ dialog: false, name: "けもすけ", icon: require("@/assets/twittericon/reimari_lover.jpg"), message: "りんちゃん８７９歳のお誕生日おめでとう！！\nいつもりんちゃんの笑顔や生き方や存在自体に勇気もらえてるので、感謝しかないです。\n本当に生まれてきてくれて、出逢ってくれてありがとう＞＜\n\n自分はかなり消極的で受身な方なので、推し活がうまくできてはいないかもだけど、\n僕も推し活をもっと頑張りたいし、推し活を通してもっとりんちゃんのような優しい人になれたらいいなって思ってます。\n\n最後に、辛い時やしんどい時ははちさん達や凛凛花さん達がそばにいるし、\n甘えたり頼ったりしてもいいからね。無理しないで頑張ってね！\n\nけもすけよ" },
				{ dialog: false, name: "Chibisuke", icon: require("@/assets/twittericon/dekaiosuneko.jpg"), message: "りんちゃん🌺☁️お誕生日おめでとう🎂\nお引越しやらネット環境やら、配信活動が中々思うように出来ない期間があったけれど、りんちゃんが楽しく気持ち良く配信が出来る事や、笑ってくれたり時には自分達を頼ってくれたり、そういう何気ない事がとても嬉しい！\nこれからもヨロシクね(≧▽≦)ゞ" },
				{ dialog: false, name: "お米", icon: require("@/assets/twittericon/raxass0735.jpg"), message: "りんちゃんお誕生日おめでとう！！！\n今年も祝えて嬉しいよ\n今年は色々不運なこともあったけどやっと環境が整って大きく羽ばたく準備ができたね！\nりんちゃんが元気で健康に良い1年を過ごせるように祈ってるよ！\nこれからも応援してるからね" },
				{ dialog: false, name: "灰色の騎士", icon: require("@/assets/twittericon/hairo_Knight.jpg"), message: "りんちゃんお誕生日おめでとう\nこれからも精一杯応援していくからね！" },
				{ dialog: false, name: "ちさと", icon: require("@/assets/twittericon/cHiSato_0622.jpg"), message: "りんりんへ\n\nりんりん、お誕生日おめでとう！！(੭ ›ω‹ )੭🎉✨\nハッピーな一年になりますように～🤍\nはちさんたちと一緒にお祝いできて嬉しかった！本当におめでとう！\nいつも素敵な配信してくれてありがとう～たくさん元気もらったよ！りんりんに出会って本当によかった～毎日楽しくて幸せだよ！\nこれからもりんりんの傍に見守り応援していきます！ずっとずっと一緒だよ！☺️💕\n来年もみんなで一緒に祝いしょうね！\nりんりん大好きだよ～(*ฅ́˘ฅ̀*)💕💕        ちさとより" },
				{ dialog: false, name: "小林渣酱インデックス", icon: require("@/assets/twittericon/kobayashiindex.jpg"), message: "りんちゃんは毎日楽しくて、私の最大の期待です。\nずっと好きだよ！\nりんちゃんの誕生日おめでとうを祈って、永遠に楽しく(｡･ω･｡)ﾉ♡" },
				{ dialog: false, name: "ぱる＠いっき", icon: require("@/assets/twittericon/pal_ikki.jpg"), message: "りんちゃん、お誕生日おめでとう！\nりんちゃんのキュートな声と笑顔が大好きです！\nいつも満開の笑顔を見れるのを楽しみにしています、これからもよろしくね！" },
				{ dialog: false, name: "ball1", icon: require("@/assets/twittericon/geoff65698763.jpg"), message: "りんちゃん、お誕生日おめでとう！\n時間が経つのは早いね、もうすぐりんちゃんの誕生日。いつも幸せな時間をありがとう。\nりんちゃんはいつも頑張ってくれているので、応援してくれる人が増えて嬉しいです。\nこれからも無理せず頑張ってね。\nりんちゃん大好きだよ、ずっと応援するよ。" },
				{ dialog: false, name: "くろりん", icon: require("@/assets/twittericon/Rin_no_Hatisan.jpg"), message: "りんちゃん！誕生日おめでとう！！！\nりんちゃんと出会ってから毎日が楽しくて幸せな日々を過ごしているよ！ありがとう😊\n誕生日は年に一度のイベントを僕らはちさんで祝えてりんちゃんが嬉しいのが僕にとっても嬉しいことだよ！だからね！\n今年はいろいろな壁を乗り越えてつよつよりんになったね！これからももっと元気で明るく癒しのあるりんを目指して一緒にどんな困難も乗り越えていこうね！\n僕と出会ってくれてありがとう！\n生まれてきてくれてありがとう！\n僕を大好きでいてくれてありがとう！\nりんを大好きで本当に良かった！って心の底から思うよ！\n上手く伝えられてるか不安だけど僕の気持ちだよ！\nどんなときもりんはひとりじゃないことを忘れないでね！\nりんにとって最高の1年を過ごせますように！\n世界で1番りんを愛してるくろりんより！" },
				{ dialog: false, name: "rito-r-ril", icon: require("@/assets/twittericon/rito_r_ril.jpg"), message: "誕生日おめでとうございます！\n数ヵ月の間に色々ありましたが、みんなを大切に思いながら進んでこれたのは素晴らしいことだと思います\n愛せる人は愛される人でもある！！" },
				{ dialog: false, name: "dnddrx", icon: require("@/assets/twittericon/dnddrx.jpg"), message: "全ての悩みにsayバイ〜バイ〜、全ての喜びにsay Hi〜Hi〜、りんちゃん誕生日おめでとう！\n毎日が幸せに過ごせるように〜" },
				{ dialog: false, name: "雪兄", icon: require("@/assets/twittericon/NLvdw9.jpg"), message: "りんちゃん！お誕生日おめでとう！\n今年でりんちゃんと迎える２年目のお誕生日その事実だけで凄い嬉しいよ✨\n去年も色々な事があった年だったけど今年も色々な事があったね、でもめげずにひた向きにひたすら頑張るりんちゃんの姿には沢山元気を貰えてたよ！\n今後また違った苦難が待ち受けてるかも知れないけどこれからまた一年その先もずっと一緒に頑張って行こうね\n改めてお誕生日本当におめでとう！\nりんちゃんが今年一年が幸せで楽しい時間を過ごせる様に！\n大好きだよ愛してるよりんちゃんーー！(*>∀<*)" },
				{ dialog: false, name: "にじぴっか", icon: require("@/assets/twittericon/NijiPikka7.jpg"), message: "誕生日おめでとう🎉✨出会ってから2回目のお祝い！！\nりんちゃんが健康で笑顔で活動してくれることが、僕の日々の願いです！\nはちさん達みんな～の為に色んな準備をしてくれること、なかなか思うようにいかない時、りんちゃんの不憫さには同じく悲しくなるけど、それでも立ち上がる姿は本当に凄い！！\n僕はそれを支える力になれてるいるだろうか。\nこう見えて最近は、自分はりんちゃんを知れてない、本当の気持ちを理解してあげられてないな…って思うこともあるし、熱量にはこの先も絶対の自信を持てるかは分からないけど、それでも認知してくれて仲良くしてくれてることが申し訳な…、じゃなくて、嬉しい！\nいつもありがとうね！\nゲームもASMRもお歌も、全てがかわいいりんちゃんをこれからも近くで見させて下さい！\nお互いにしゃ～わせでぴっかぴかになれるように頑張ろうね！\n引き続きよろしくお願いします！🌈✨\nりんちゃんすっきすき🌺☁️" },
				{ dialog: false, name: "東雲往人", icon: require("@/assets/twittericon/yukito_sinonome.jpg"), message: "Happy birthday \n\nお誕生日おめでとう！\nりんと出会って2回目のお誕生日も一緒に迎えることができて本当に嬉しいよ\n8月7日は私も誕生日だから本当に特別な日だよ\n出会って1年4か月沢山癒してもらって、楽しい時も苦しい時も悲しい時もいっぱいあったね\n１on１二人っきりで沢山いろんなお話しもしたね\nりんと過ごした時間の全てが大切な大切な宝物です\n\nりんは優しくて仲間想いで繊細で傷つきやすい性格をしてるから\nこれから先も沢山の困難が待ち受けていると思うけど\n一緒に力を合わせて乗り越えて\nりんの夢、目標を叶えていこうね\n叶える為に全力で支えていくからね\n\n生まれてきてくれてありがとう\n出会ってくれてありがとう\n好きになってくれてありがとう\nりんと出会えた私は世界で一番幸せです\n\nこれからも隣で支えていくからね\nりん大好き！世界で一番誰よりも愛してます\n絶対に幸せにするからね" },
				{ dialog: false, name: "にゃんこの民", icon: "", message: "りんちゃんお誕生日おめでとう！\n去年はお祝いできなかったから今年は精一杯お祝いするね！\nりんちゃんと出会えてもうすぐ9ヵ月経とうとしてます！\nずっとずっとりんちゃんのことが好きで好きでたまりません！\n今日という日を楽しく、今年という年を明るく過ごそうね！\nいつもりんちゃんに幸せにしてもらってるのでお返ししたいから何でも言ってほしいな！\nりんちゃんが好きって気持ちはこれからも変わらないし、変えていかないし、何年何十年経っても僕はりんちゃんとずっと一緒に居ようと思うよ！\nホントいつも楽しくてハラハラしちゃうような配信、時には優しいASMR、FCでの配信もどんなりんちゃんも好きだよ！\nでも身体には気を付けてね！\nこれからも楽しく配信してるりんちゃんずっと見ていくからね！\nりんちゃん大好きだよ♡" },
				{ dialog: false, name: "ちょこ", icon: require("@/assets/twittericon/choco_latto.jpg"), message: "りんちゃんお誕生日おめでとう～！\nりんちゃんの配信にはいつもたくさん癒されてます(*´˘`*)♡\n配信環境とかお引越しで大変な時期もあったけど\n一緒にがんばってこれてよかったね٩(๑❛ᴗ❛๑)۶\nこれからもたくさん思い出作っていこうね(*ˊ˘ˋ*)｡♪:*" },
				{ dialog: false, name: "takuya", icon: require("@/assets/twittericon/takuya075357362.jpg"), message: "りんちゃんお誕生日おめでとう！！\nオレがりんちゃんの配信に初めて遊びに行ったのが、丁度去年の8月くらいだったので、オレとりんちゃんが出会ってもう1年だね！\n配信行く前までは『パリピギャル』ってイメージが正直あったけど、行ってみるとゆるふわ癒し系で、すぐすっぽりハマってしまいました！！\n色々と大変なことばかりだけど、これからもみんなと一緒に頑張ろな！\nワッショーーーーイ！！！！«٩(*´ ꒳ `*)۶»" },
				{ dialog: false, name: "だいや", icon: require("@/assets/twittericon/7yqc8WZOzD7LjDX.jpg"), message: "りんちゃんお誕生日おめでとうございます！\nりんちゃんの誕生日をお祝いするのは2回目ですね！今年もりんちゃんと過ごせること、お祝いができることとても幸せに思えます！\n今年は念願のKU100の購入やお引越し、回線工事などめちゃくちゃつよつよになったね！本当によく頑張ったね！\nそして、最近ではコメ読みなしに挑戦したりスパチャを最後にしたりとASMRを良くする為に考えて工夫してるのも素晴らしいと思います！りんちゃんのASMRに対しての本気で頑張りたい想いとリスナーのことを想ってくれてるのすごく伝わってるよ！いつもありがとう！\n声も顔も優しい性格もかわいいところも寄り添ってくれるところも配信の雰囲気もりんちゃんの全てが大好きです！柔らかいお胸も。。。w\nこれからもたくさんの時間を過ごしてりんちゃんの事もっともっと好きにさせてね？\nりんちゃんのこと本当にだいすきだよ！\nりんちゃんが推しでよかった！"},
				{ dialog: false, name: "無響(ムキョウ)", icon: require("@/assets/twittericon/mu_kyo_u.jpg"), message: "りんちゃん🎉㊗️お誕生日おめでとう(o^^o)㊗️🎉\n今年もりんちゃんのお誕生日をお祝い出来て凄く嬉しい✨\n前のお誕生日から1年間辛い事や悲しい事も沢山あったと思うけど良く頑張ったね(｡-ω-ヾ(>᎑<`*)ヨシヨシ✨\nりんちゃんの優しさに溢れた素敵な声も、他人を凄く想いやれて優しくできる所も、自分達はちさんの事を考えて悩んでくれる所も、ゲームをホントに楽しそうにプレイして少し負けず嫌いな所も、ちょっとむっつりんなっちゃう所も全て大好き💕\nこれから先も沢山の記念日を一緒に迎えて沢山お祝いしよう✨\nこれからもりんの笑顔と幸せを願ってずっと傍に💕改めてお誕生日おめでとうりん✨" },
				{ dialog: false, name: "(baka) ame。 ", icon: require("@/assets/twittericon/amedayooooo.jpg"), message: "りんちゃん〜！お誕生日おめでとう〜\nりんちゃんと出会えてよかったよ\n配信見るときは幸せだー\nこれからは仲良くしてそばに居たいな〜\n愛してるよ\n\nボクはりんちゃんだけのバカだから！\n\nfrom ame。" },
				{ dialog: false, name: "とんた", icon: require("@/assets/twittericon/tonta_pdmn.jpg"), message: "りんちゃん、お誕生日おめでとう！\nこれからの１年も素敵な年になるように祈っています。\nいつも楽しい配信をありがとう、とても癒されてます！\nまだまだ暑いけど、体調に気を付けて無理しすぎないでね。\nこれからもずっと応援してるよ！" },
				{ dialog: false, name: "ほとり", icon: require("@/assets/twittericon/owariyuki.jpg"), message: "りんちゃん誕生日おめでとう🎊\n主にASMR配信で癒されてます！\nこれからも応援してます🔥" },
				{ dialog: false, name: "Keita", icon: require("@/assets/twittericon/hollyhock0518.jpg"), message: "りんちゃん、デビューから２回目の誕生日おめでとう！！！！！！\n産まれてきてくれてありがとう！出会ってくれてありがとう！\nりんちゃんと一緒にいられて本当に幸せだよ\n\n楽しいこと、大変なこと、いろいろあったけれど、こうして今年も誕生日をお祝いできて本当に嬉しいです！\n来年も、再来年も、ずっと同じように誕生日をお祝いしたい\n\nこれからも一緒にいろいろなことを経験しながら成長していこうね\nそして何かあったらいつでも話聞くよ\nずっと応援してるし微力ながらりんちゃんのことを支えさせてね\n\n大好きです！離れない！\nりんちゃんのことを世界一愛してます！\n" }
			]
		};
	}
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