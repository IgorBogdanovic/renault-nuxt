<template>

    <section class="shp__header">

        <div class="shp__header-image">

            <div class="shp__header-image__text">
                <h1 class="text--bolder shp__header-title">
                    Questions 
                    <br>
                    & Answers
                </h1>
            </div>

        </div>

        <div class="shp__header-text shp__header-text--alt" >
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>

    </section>

</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

.shp__header-text--alt {
  background: $white-two;
}
</style>