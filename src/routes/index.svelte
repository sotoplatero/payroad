<script >
  import SEO from '$lib/components/SEO.svelte'
import Typewriter from 'svelte-typewriter'  
</script>

<SEO/>

<div class="hero min-h-screen">
  <div class="text-center">
    <div class="max-w-lg ">
      <div class="uppercase text-2xl">
        payroad<span class="text-indigo-600">&bull;</span>click
      </div>
      <h1 class="mb-5 text-6xl font-extrabold">
        Earn bitcoins <br> by selling 
        <div class="text-black">
          <Typewriter loop={true} interval="100" delay="10">
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
        The easiest way to sell in <strong>bitcoin</strong> or <a href="https://qvapay.com" class="link" target="_blank" rel="noopener nofollower"><strong>qvapay</strong></a>, just drag and drop your digital product.
      </p> 

      <label for="modal-index" class="btn btn-primary btn-outline border-4 btn-lg font-extrabold text-2xl">soon</label> 
      <input type="checkbox" id="modal-index" class="modal-toggle"> 
      <div class="modal">
        <div class="modal-box">
          <p class="text-lg">ok, I'm posting what I'm doing <strong>#buildinpublic</strong> follow me on <a href="https://twitter.com/sotoplatero" class="link">twitter</a> to comment and be the first to sell.</p> 
          <div class="modal-action flex justify-center">
            <label for="modal-index" class="btn btn-primary fotn">Accept</label> 
          </div>
        </div>
      </div>

    </div>
  </div>
</div>