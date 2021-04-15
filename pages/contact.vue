<template>
  <div class="contact-page">
    <!--page header-->
    <div class="page-head">
      <div class="container">
        <div class="p-head">
          <div class="col-sm-12">
            <div class="all-title">
              <h3>
                {{ $t('titles.contact') }}<span class="tit-color">.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--page header-->
    <branches></branches>
    <contact-form></contact-form>
    <Services></Services>
  </div>
</template>

<script>
import Branches from '@/components/contact/Branches'
import ContactForm from '@/components/contact/ContactForm'
import Services from '@/components/Home/Services'
export default {
  components: {
    Branches,
    ContactForm,
    Services,
  },
}
</script>

