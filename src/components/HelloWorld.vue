<template>
  <v-app id="inspire">
    <v-app-bar app shrink-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-spacer>花雲りん誕生日2022</v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="n in 24" :key="n" cols="4">
            <div class="cardtest">
              <v-card
                height="200px"
                @click.stop="dialog = true"
              >
                <v-card-title>{{ title }}</v-card-title>
                <v-divider></v-divider>
                <v-card-text>{{ content }}</v-card-text>
              </v-card>

              <v-dialog v-model="dialog" scrollable max-width="80%">
                <v-card>
                  <v-card-title>{{ title }}</v-card-title>
                  <v-divider></v-divider>
                  <v-card-text height="300px">{{ content }}</v-card-text>
                </v-card>
              </v-dialog>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.cardtest {
		max-width: 100%;
		text-overflow: ellipsis;
		white-space: nowrap;
}
</style>

<script>
export default {
  name: "CardTest",
  data() {
    return {
			title: "名前",
      content: "メッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテストメッセージテスト",
      dialog: false,
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