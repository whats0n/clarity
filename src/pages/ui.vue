<template>
  <div :class="$style.page">
    <div :class="$style.section">
      <UiButton text="Button" />
      <UiButton ui="secondary" text="Button" :to="{ path: '/' }" />
      <UiButton ui="outline" size="md" text="Button" />
    </div>

    <div :class="$style.section">
      <p class="label">Label</p>
      <h1 class="title-lg">Title LG</h1>
      <h2 class="title-md">Title MD</h2>
      <h3 class="title-sm">Title SM</h3>
      <p class="text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum facere
        ratione in quae. Adipisci ipsa delectus, deleniti vero assumenda
        voluptatum? Quibusdam assumenda cumque accusamus ab, saepe nisi
        praesentium qui blanditiis officia perferendis, nulla fugiat molestiae,
        eaque labore? Ratione obcaecati repellendus qui quia iste fugiat
        voluptate ullam reiciendis earum eius voluptatum consequuntur assumenda
        quisquam autem veritatis aperiam, consequatur inventore harum delectus!
        Maxime et laborum iure numquam aliquam quibusdam ipsum enim tenetur
        beatae molestiae necessitatibus modi doloribus dolorum, odio assumenda
        delectus totam blanditiis eius mollitia? Vel quis ipsa repellendus
        dolorum, illo quaerat! Asperiores beatae iusto debitis dolorum,
        accusamus est cumque facilis. Veritatis.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Home',
})
</script>

<style lang="scss" module>
.page {
  display: grid;
  gap: 40px;
  padding: 100px 50px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
