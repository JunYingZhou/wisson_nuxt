<script setup lang="ts">
import {
  BorderBox10,
  BorderBox12,
  BorderBox8,
  Decoration11,
  Decoration6,
  Decoration7,
  Decoration9
} from "@newpanjing/datav-vue3";
</script>

<template>
<!--  <div class="container">-->
    <BorderBox12 id="borderBox10">

      <div>
        <Decoration11 style="width:310px; height:70px; color: white; top: 10px;">
          <p style="margin-left: 6px">右车型:BYD海豚</p>
          <p style="margin-left: 10px">右车牌:粤B123145</p>
        </Decoration11>

        <Decoration11 style="width:310px; height:70px; color: white; top: 10px; margin-top: 10px">
          <p style="margin-left: 6px">左车型:BYD海豚</p>
          <p style="margin-left: 10px">左车牌:粤B123145</p>
        </Decoration11>
      </div>



      <BorderBox10 style="width: 55%; height: 400px; left: 100px;">
        <Decoration6 style="width:300px; height:30px; color: white; top: 20px; left: 33%; position: relative"></Decoration6>
      </BorderBox10>

      <Decoration9 class="decoration">66%</Decoration9>


    </BorderBox12>
<!--  </div>-->
<!--  <dv-border-box-12>dv-border-box-12</dv-border-box-12>-->
</template>

<style scoped>

#borderBox10 {
  display: flex !important;
  flex-direction: row !important;
  padding: 10px;
  width: 100%;
  height: 95%;
  background-image: url("/assets/images/visualBack.png");
  background-size: cover;
  background-position: center;
}

.decoration {
  position: relative;
  left: 10%;
  width: 100px;
  height: 100px;
  color: white;
  margin-right: 10px; /* Optional: space between items */
}


#borderBox8 {
  width: 300px;
  height: 200px;
  margin-right: 10px; /* Optional: space between items */
}

</style>
