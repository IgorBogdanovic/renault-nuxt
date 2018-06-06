<template>
    <section class="block">

        <article-preview v-for="(preview, index) in previews" :key="index" :prev="preview"></article-preview>
        <article-preview :prev="previews[0]" class='component--landscape'></article-preview>
        <article-preview :prev="previews[2]" class='component--landscape component--landscape--reverse'></article-preview>

    </section>
</template>

<script>
export default {
    data() {
        return {
            previews: [
                {
                    image: 'https://dummyimage.com/344x456/c9c9c9/000000.png',
                    imageAlt: 'some alt',
                    tagged: true,
                    tag: 'my business',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    desc: 'All work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy...'
                },
                {
                    image: 'https://dummyimage.com/344x456/c9c9c9/000000.png',
                    imageAlt: 'some alt',
                    tagged: true,
                    tag: 'tag',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
                    //desc: 'All work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy...'
                },
                {
                    image: 'https://dummyimage.com/344x456/c9c9c9/000000.png',
                    imageAlt: 'some alt',
                    tagged: false,
                    tag: 'other tag',
                    //title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    desc: 'All work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy...'
                },
                {
                    image: 'https://dummyimage.com/344x456/c9c9c9/000000.png',
                    imageAlt: 'some alt',
                    tagged: true,
                    tag: 'fan',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    desc: 'All work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy, all work and no play make Jack a dull boy...'
                }
            ]
        }
    }
}
</script>

<style lang="css">
</style>
