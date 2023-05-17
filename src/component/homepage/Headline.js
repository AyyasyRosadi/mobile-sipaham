import React from 'react'
import { View } from "react-native"
import { ImageSlider } from 'react-native-image-slider-banner'

function Headline() {
    const img = [
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
        { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
        { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
    ]
    return (
        <View className="bg-white">
            <ImageSlider
                data={img}
                autoPlay={true}
                caroselImageContainerStyle={{marginTop:-40,marginBottom:-30}}
            />
        </View>
    )
}

export default Headline