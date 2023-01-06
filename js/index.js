$('.start').on('click', ()=>{
    $('.to').html('现在按下面链接做再点击下一步').append(`
        <div>
            <a href="https://jingyan.baidu.com/article/fd8044fa84e9991130137a24.html" target="_blank">让浏览器允许自动媒体自动播放</a>
        </div>
    `)
    $('.start').on('click',()=>{
        $('.ready').html('').append(`
            <div class="to" style="color: orange;">先声明不是病毒</div>
        `)
        setTimeout(()=>{
            $('.ready').html('').append(`
            <svg class="svg" width="800" height="800">
                <circle stroke-linecap="round" class="huan" cx="400" cy="400" r="200" fill="none" stroke-width="20" stroke="rgb(67, 213, 250)" />
                <text class="text" x="350" y="480" fill="orange" font-size="200">3</text>
            </svg>
            `)
        },2000)
        setTimeout(()=>{
            $('.ready').html('').append(`
            <svg class="svg" width="800" height="800">
                <circle stroke-linecap="round" class="huan" cx="400" cy="400" r="200" fill="none" stroke-width="20" stroke="rgb(67, 213, 250)" />
                <text class="text" x="350" y="480" fill="orange" font-size="200">2</text>
            </svg>
            `)
        },4700)
        setTimeout(()=>{
            $('.ready').html('').append(`
            <svg class="svg" width="800" height="800">
                <circle stroke-linecap="round" class="huan" cx="400" cy="400" r="200" fill="none" stroke-width="20" stroke="rgb(67, 213, 250)" />
                <text class="text" x="350" y="480" fill="orange" font-size="200">1</text>
            </svg>
            `)
        },7400)
        setTimeout(()=>{
            window.location.href="./html/start.html"
        },10100)   
    })
})
window.onload = function(){   
    $('.word').fadeIn(2000,()=>{
        $('.word').fadeOut(2000,()=>{
            $('.word').html("祝阿哥你")
            $('.word').fadeIn(2500,()=>{
                $('.word').fadeOut(1500,()=>{
                    $('.word').html("生日快乐")
                    $('.word').fadeIn(4000,()=>{
                        $('.click').fadeIn(2000,()=>{
                            $('.hbr').on('click',()=>{
                                window.location.href="../html/next.html"        
                            })
                        })
                    })
                })
            })
        })
    })
}