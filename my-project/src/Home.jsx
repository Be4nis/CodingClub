<div class="">

<!-- tab menu -->
<div class="flex flex-row">
    <button class="px-8 py-4 text-xl duration-300 active:bg-slate-200 text-amber-200 border-b-2 border-amber-200" onclick="openClub(event, 'clubs', 'clubLink')" id="clubLink" name="links">Clubs</button>
    <button class="px-8 py-4 text-xl duration-300 active:bg-slate-200 text-purple-500" onclick="openClub(event, 'sports', 'sportLink')" id="sportLink" name="links">Sports</button>
</div>


<!-- clubs tab -->
<div id="clubs" class="text-purple-500 w-full" name="tab">


    <div class="flex flex-wrap p-10 gap-x-32 gap-y-16 justify-center">
        <div class="grid grid-rows-5">
            <div class="relative duration-300 hover:opacity-50 row-span-4"  onmouseover="showWords(event, 'clubdesc1')" onmouseout="hideWords(event, 'clubdesc1')">
                <p class="hidden absolute w-full h-full left-4 top-4 opacity-100" id="clubdesc1">This club is abt ....</p>
                <img class="border-4 border-purple-700" 
                src="https://imgs.search.brave.com/oT94WrFWLNAX8ZwCJaOvKLzXC8bjgg2cx9mydX-WYxM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzgxLzMzLzY3/LzM2MF9GXzQ4MTMz/Njc5M18yUEF5czcx/N2cxdjBhbXl1aTJ3/WEJzNkc1UTNmcGph/cS5qcGc">
            </div>
            <div class="flex items-center justify-center border-x-2 border-b-2 border-purple-700 row-span-1">
                <h2 class="text-3xl text-center font-bold p-2">Progrmming Club</h2>
            </div>
        </div>

        <div class="grid grid-rows-5">
            <div class="relative duration-300 hover:opacity-50 row-span-4"  onmouseover="showWords(event, 'clubdesc2')" onmouseout="hideWords(event, 'clubdesc2')">
                <p class="hidden absolute w-full h-full left-4 top-4 opacity-100" id="clubdesc2">This club is abt ....</p>
                <img class="border-4 border-purple-700" 
                src="https://imgs.search.brave.com/UnrwTb9vlVfmJDlmSttoW1yK5lt7-ZiqYRerKv2B8_4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzQ4LzM5Lzc0/LzM2MF9GXzM0ODM5/NzQwNF93WHVmMjJH/VVBOQWg2N2h0Qlpa/bmFEU3gzQmo5Mnll/cC5qcGc">
            </div>
            <div class="flex items-center justify-center border-x-2 border-b-2 border-purple-700 row-span-1">
                <h2 class="text-3xl text-center font-bold p-2">Competetive Progrmming Club</h2>
            </div>
        </div>

        <div class="grid grid-rows-5">
            <div class="relative duration-300 hover:opacity-50 row-span-4"  onmouseover="showWords(event, 'clubdesc3')" onmouseout="hideWords(event, 'clubdesc3')">
                <p class="hidden absolute w-full h-full left-4 top-4 opacity-100" id="clubdesc3">This club is abt ....</p>
                <img class="border-4 border-purple-700"
                src="https://imgs.search.brave.com/3gjbKa2IhZJHNvcn4Nk8Q_cO9cWtFRS5Z2D2Gz-KN54/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzk4LzIyLzA5/LzM2MF9GXzE5ODIy/MDkzOV9Fc1VVdVI4/U1p6ckNNNnFheG1E/ZWhpNHR0cjlaakhp/by5qcGc">
            </div>

            <div class="flex items-center justify-center border-x-2 border-b-2 border-purple-700 row-span-1">
                <h2 class="text-3xl text-center font-bold p-2">Chess Club</h2>
            </div>
        </div>

        <div class="grid grid-rows-5">
            <div class="relative duration-300 hover:opacity-50 row-span-4"  onmouseover="showWords(event, 'clubdesc4')" onmouseout="hideWords(event, 'clubdesc4')">
                <p class="hidden absolute w-full h-full left-4 top-4 opacity-100" id="clubdesc4">This club is abt ....</p>
                <img class="border-4 border-purple-700" height="200"
                src="https://imgs.search.brave.com/tGnWDs-MbFUowKgPQe7ZQmW3Zpy8ucI-IIx50Tskwdg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzU0LzgwLzQx/LzM2MF9GXzM1NDgw/NDE1MV9Qa1lTQ0J6/Y3BEY3VQNGpETlNY/VWVRbTVGR2xibHhT/MC5qcGc">
            </div>
            <div class="flex items-center justify-center border-x-2 border-b-2 border-purple-700 row-span-1">
                <h2 class="text-3xl text-center font-bold p-2">STEM Club</h2>
            </div>
        </div>

    </div>
</div>

<!-- sports tab -->
<div id="sports" class="hidden text-purple-500" name="tab">
    <div class="flex flex-wrap p-10 gap-x-32 gap-y-16 justify-center">

        <div class="grid grid-rows-5">
            <div class="relative duration-300 hover:opacity-50 row-span-4" onmouseover="showWords(event, 'sportdesc1')" onmouseout="hideWords(event, 'sportdesc1')">
                <p class="hidden absolute w-full h-full left-4 top-4 opacity-100" id="sportdesc1">This sport is abt ....</p>
                <img class="border-4 border-purple-700" width="500"
                src="https://imgs.search.brave.com/jqfsgcj2oKicHyyrqYObp3jvi5iXEKro4D9Ro6Pazzs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1waWN0/dXJlcy0xbjU5Ymti/aGM4bWlldWxxLmpw/Zw">
            </div>
            <div class="flex items-center justify-center border-x-2 border-b-2 border-purple-700 row-span-1">
                <h2 class="text-3xl text-center font-bold p-2 ">Test Sport</h2>
            </div>
        </div>

        <div class="grid grid-rows-5">
            <div class="relative duration-300 hover:opacity-50 row-span-4" onmouseover="showWords(event, 'sportdesc2')" onmouseout="hideWords(event, 'sportdesc2')">
                <p class="hidden absolute w-full h-full left-4 top-4 opacity-100" id="sportdesc2">This sport is abt ....</p>
                <img class="border-4 border-purple-700" width="500"
                src="https://imgs.search.brave.com/jqfsgcj2oKicHyyrqYObp3jvi5iXEKro4D9Ro6Pazzs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1waWN0/dXJlcy0xbjU5Ymti/aGM4bWlldWxxLmpw/Zw">
            </div>
            <div class="flex items-center justify-center border-x-2 border-b-2 border-purple-700 row-span-1">
                <h2 class="text-3xl text-center font-bold p-2 ">Test Sport</h2>
            </div>
        </div>

        <div class="grid grid-rows-5">
            <div class="relative duration-300 hover:opacity-50 row-span-4" onmouseover="showWords(event, 'sportdesc3')" onmouseout="hideWords(event, 'sportdesc3')">
                <p class="hidden absolute w-full h-full left-4 top-4 opacity-100" id="sportdesc3">This sport is abt ....</p>
                <img class="border-4 border-purple-700" width="500"
                src="https://imgs.search.brave.com/jqfsgcj2oKicHyyrqYObp3jvi5iXEKro4D9Ro6Pazzs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1waWN0/dXJlcy0xbjU5Ymti/aGM4bWlldWxxLmpw/Zw">
            </div>
            <div class="flex items-center justify-center border-x-2 border-b-2 border-purple-700 row-span-1">
                <h2 class="text-3xl text-center font-bold p-2 ">Test Sport</h2>
            </div>
        </div>

        <div class="grid grid-rows-5">
            <div class="relative duration-300 hover:opacity-50 row-span-4" onmouseover="showWords(event, 'sportdesc4')" onmouseout="hideWords(event, 'sportdesc4')">
                <p class="hidden absolute w-full h-full left-4 top-4 opacity-100" id="sportdesc4">This sport is abt ....</p>
                <img class="border-4 border-purple-700" width="500"
                src="https://imgs.search.brave.com/jqfsgcj2oKicHyyrqYObp3jvi5iXEKro4D9Ro6Pazzs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1waWN0/dXJlcy0xbjU5Ymti/aGM4bWlldWxxLmpw/Zw">
            </div>
            <div class="flex items-center justify-center border-x-2 border-b-2 border-purple-700 row-span-1">
                <h2 class="text-3xl text-center font-bold p-2 ">Test Sport</h2>
            </div>
        </div>

    </div>


</div>


</div>

</div>