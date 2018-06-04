<template>
<div class="page">
    <app-header/>

    <!-- Cgu Page -->
    <div class="p-static p-cgu">

        <h1 class="page-title">Cgu</h1>

        <div class="container">

            <div class="static-page__paragraph">

                <p class="static-page__paragraph-title">nunc tincidunt</p>
                <p class="static-page__paragraph-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet maximus ante. Aliquam ut felis sodales, vulputate nulla in, varius arcu. Integer dictum magna eu velit fermentum, sed fringilla diam tristique. Pellentesque tempor tempus justo quis volutpat. Nunc tincidunt scelerisque cursus. Praesent urna ipsum, porttitor ac leo id, porta lobortis lectus. Cras congue pretium tortor et malesuada. Mauris vitae urna sit amet velit volutpat ultricies. In vehicula tincidunt risus, vitae feugiat justo convallis vitae. Vestibulum eu fermentum felis. In vitae sodales urna.</p>
                <p class="static-page__paragraph-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet maximus ante. Aliquam ut felis sodales, vulputate nulla in, varius arcu. Integer dictum magna eu velit fermentum, sed fringilla diam tristique. Pellentesque tempor tempus justo quis volutpat. Nunc tincidunt scelerisque cursus. Praesent urna ipsum, porttitor ac leo id, porta lobortis lectus. Cras congue pretium tortor et malesuada. Mauris vitae urna sit amet velit volutpat ultricies. In vehicula tincidunt risus, vitae feugiat justo convallis vitae. Vestibulum eu fermentum felis. In vitae sodales urna.</p>


            </div>
            
            <div class="static-page__paragraph">

                <p class="static-page__paragraph-title">sed consequat</p>
                <p class="static-page__paragraph-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet maximus ante. Aliquam ut felis sodales, vulputate nulla in, varius arcu. Integer dictum magna eu velit fermentum, sed fringilla diam tristique. Pellentesque tempor tempus justo quis volutpat. Nunc tincidunt scelerisque cursus. Praesent urna ipsum, porttitor ac leo id, porta lobortis lectus. Cras congue pretium tortor et malesuada. Mauris vitae urna sit amet velit volutpat ultricies. In vehicula tincidunt risus, vitae feugiat justo convallis vitae. Vestibulum eu fermentum felis. In vitae sodales urna.</p>
                <p class="static-page__paragraph-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet maximus ante. Aliquam ut felis sodales, vulputate nulla in, varius arcu. Integer dictum magna eu velit fermentum, sed fringilla diam tristique. Pellentesque tempor tempus justo quis volutpat. Nunc tincidunt scelerisque cursus. Praesent urna ipsum, porttitor ac leo id, porta lobortis lectus. Cras congue pretium tortor et malesuada. Mauris vitae urna sit amet velit volutpat ultricies. In vehicula tincidunt risus, vitae feugiat justo convallis vitae. Vestibulum eu fermentum felis. In vitae sodales urna.</p>


            </div>

                        <div class="static-page__paragraph">

                <p class="static-page__paragraph-title">nunc tincidunt</p>
                <p class="static-page__paragraph-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet maximus ante. Aliquam ut felis sodales, vulputate nulla in, varius arcu. Integer dictum magna eu velit fermentum, sed fringilla diam tristique. Pellentesque tempor tempus justo quis volutpat. Nunc tincidunt scelerisque cursus. Praesent urna ipsum, porttitor ac leo id, porta lobortis lectus. Cras congue pretium tortor et malesuada. Mauris vitae urna sit amet velit volutpat ultricies. In vehicula tincidunt risus, vitae feugiat justo convallis vitae. Vestibulum eu fermentum felis. In vitae sodales urna.</p>
                <p class="static-page__paragraph-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet maximus ante. Aliquam ut felis sodales, vulputate nulla in, varius arcu. Integer dictum magna eu velit fermentum, sed fringilla diam tristique. Pellentesque tempor tempus justo quis volutpat. Nunc tincidunt scelerisque cursus. Praesent urna ipsum, porttitor ac leo id, porta lobortis lectus. Cras congue pretium tortor et malesuada. Mauris vitae urna sit amet velit volutpat ultricies. In vehicula tincidunt risus, vitae feugiat justo convallis vitae. Vestibulum eu fermentum felis. In vitae sodales urna.</p>


            </div>
            
            <div class="static-page__paragraph">

                <p class="static-page__paragraph-title">sed consequat</p>
                <p class="static-page__paragraph-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet maximus ante. Aliquam ut felis sodales, vulputate nulla in, varius arcu. Integer dictum magna eu velit fermentum, sed fringilla diam tristique. Pellentesque tempor tempus justo quis volutpat. Nunc tincidunt scelerisque cursus. Praesent urna ipsum, porttitor ac leo id, porta lobortis lectus. Cras congue pretium tortor et malesuada. Mauris vitae urna sit amet velit volutpat ultricies. In vehicula tincidunt risus, vitae feugiat justo convallis vitae. Vestibulum eu fermentum felis. In vitae sodales urna.</p>
                <p class="static-page__paragraph-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet maximus ante. Aliquam ut felis sodales, vulputate nulla in, varius arcu. Integer dictum magna eu velit fermentum, sed fringilla diam tristique. Pellentesque tempor tempus justo quis volutpat. Nunc tincidunt scelerisque cursus. Praesent urna ipsum, porttitor ac leo id, porta lobortis lectus. Cras congue pretium tortor et malesuada. Mauris vitae urna sit amet velit volutpat ultricies. In vehicula tincidunt risus, vitae feugiat justo convallis vitae. Vestibulum eu fermentum felis. In vitae sodales urna.</p>


            </div>

        </div>

    </div>
        
    <!-- Cgu Page End -->

    <app-footer/>
</div>
</template>

<script>
import AppHeader from "~/components/Header.vue";
import AppFooter from "~/components/Footer.vue";

export default {
  created() {
    this.$api.get(this.$api.queries.test_node).then(res => {
      console.log(res);
    });
  },
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";
</style>
