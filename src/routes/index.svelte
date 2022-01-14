<script >
import Typewriter from 'svelte-typewriter'  
</script>
<div class="hero min-h-screen">
  <div class="text-center">
    <div class="max-w-lg space-x-8">
      <div class="uppercase text-2xl">
        payroad<span class="text-yellow-600">&bull;</span>shop
      </div>
      <h1 class="mb-5 text-6xl font-extrabold">
        Earn bitcoins <br> by selling 
        <div class="text-black">
          <Typewriter loop={true} interval="70" delay="10">
            <span class="text-pink-600">ebooks</span>
            <span class="text-blue-600">photos</span>
            <span class="text-green-600">recipes</span>
            <span class="text-red-600">podcasts</span>
            <span class="text-indigo-600 ">templates</span>
            <span class="text-purple-600 ">courses</span>
          </Typewriter>
        </div>
      </h1> 
      <p class="mb-5 text-2xl text-gray-500 font-bold">
        The easiest way to sell just drag and drop your digital product.
      </p> 
      <button class="btn btn-primary btn-outline border-4 btn-lg font-extrabold text-2xl disabled">Soon!!</button>
    </div>
  </div>
</div>