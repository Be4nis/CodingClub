function App() {
    var imageSize = "border-4 border-purple-700 w-96 h-96 object-cover"
    return (
        <>
            <div class="grid w-4/5 m-auto mt-10 mb-10 gap-y-20">

            <div class="row-span-1 flex items-center justify-center w-auto">
                    <h1 class="text-7xl col-span-2 font-mono">School Work</h1>
                </div>

                <div class="">


                    <div id="clubs" class="text-purple-500 w-full" name="tab">


                        <div class="flex flex-wrap p-10 gap-x-32 gap-y-16 justify-center">
                            <div class="grid grid-rows-5">
                                <div class="relative duration-300 hover:opacity-50 row-span-4" onmouseover="showWords(event, 'clubdesc1')" onmouseout="hideWords(event, 'clubdesc1')">
                                    <img class={imageSize}
                                        src="https://imgs.search.brave.com/6sJoxt1CMtUAzULKc0LbufXuSGUGth8_jkj3Seky5rE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFzU3ZzendBMEwu/anBn"></img>
                                </div>
                                <div class="flex items-center justify-center border-x-2 border-b-2 border-purple-700 row-span-1">
                                    <h2 class="text-3xl text-center font-bold p-2">Advanced Funtions</h2>
                                </div>
                            </div>

                            <div class="grid grid-rows-5">
                                <div class="relative duration-300 hover:opacity-50 row-span-4" onmouseover="showWords(event, 'clubdesc2')" onmouseout="hideWords(event, 'clubdesc2')">
                                    <img class={imageSize}
                                        src="https://imgs.search.brave.com/AucOKABZu-uNeM2n9HlO9X8SojPl2bdORkhk40HMnXQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFMbjBtRUZjZEwu/anBn"></img>
                                </div>
                                <div class="flex items-center justify-center border-x-2 border-b-2 border-purple-700 row-span-1">
                                    <h2 class="text-3xl text-center font-bold p-2">Vectors & Calc</h2>
                                </div>
                            </div>

                            <div class="grid grid-rows-5">
                                <div class="relative duration-300 hover:opacity-50 row-span-4" onmouseover="showWords(event, 'clubdesc3')" onmouseout="hideWords(event, 'clubdesc3')">
                                    <img class={imageSize}
                                        src="https://imgs.search.brave.com/MLJ5M-W1s_eYoPa10dL7Kf_OjSJy3x0L9aPOrM9eCos/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxS2YwSExMSHFM/LmpwZw"></img>
                                </div>

                                <div class="flex items-center justify-center border-x-2 border-b-2 border-purple-700 row-span-1">
                                    <h2 class="text-3xl text-center font-bold p-2">Physics</h2>
                                </div>
                            </div>

                            <div class="grid grid-rows-5">
                                <div class="relative duration-300 hover:opacity-50 row-span-4" onmouseover="showWords(event, 'clubdesc4')" onmouseout="hideWords(event, 'clubdesc4')">
                                    <img class={imageSize}
                                        src="https://imgs.search.brave.com/eq0ASuaZnrBaCNISYbN5IbIBiRJYhb2Bs8ZvbqDDDHY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFOeThBS3c4Mkwu/anBn"></img>
                                </div>
                                <div class="flex items-center justify-center border-x-2 border-b-2 border-purple-700 row-span-1">
                                    <h2 class="text-3xl text-center font-bold p-2">Biology</h2>
                                </div>
                            </div>

                            <div class="grid grid-rows-5">
                                <div class="relative duration-300 hover:opacity-50 row-span-4" onmouseover="showWords(event, 'clubdesc4')" onmouseout="hideWords(event, 'clubdesc4')">
                                    <img class={imageSize}
                                        src="https://imgs.search.brave.com/3CfcEUXrpn6DctTfWdWrftnM8ati7UDzGOtT-pfAB40/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zY2ll/bmNlc2hlcGhlcmQu/Y29tL2Nkbi9zaG9w/L3Byb2R1Y3RzL3Nj/aWVuY2Utc2hlcGhl/cmQtaG9tZXNjaG9v/bC1jaGVtaXN0cnkt/dGV4dGJvb2stY292/ZXItbWluLmpwZz92/PTE2ODk5MDg5MzIm/d2lkdGg9MTIwMA"></img>

                                </div>
                                <div class="flex items-center justify-center border-x-2 border-b-2 border-purple-700 row-span-1">
                                    <h2 class="text-3xl text-center font-bold p-2">Chemistry</h2>
                                </div>
                            </div>

                            <div class="grid grid-rows-5">
                                <div class="relative duration-300 hover:opacity-50 row-span-4" onmouseover="showWords(event, 'clubdesc4')" onmouseout="hideWords(event, 'clubdesc4')">
                                    <img class={imageSize}
                                        src="https://imgs.search.brave.com/IXyTrRvzPI_c42Yu6nXIReUdKstLI19mhFeeQeCcZOk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFOR0ZFRWctR0wu/anBn"></img>
                                </div>
                                <div class="flex items-center justify-center border-x-2 border-b-2 border-purple-700 row-span-1">
                                    <h2 class="text-3xl text-center font-bold p-2">Functions</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App

