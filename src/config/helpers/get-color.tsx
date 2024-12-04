import ImageColors from "react-native-image-colors"



export const getColorFromImage = async( image: string ) => {

    const fallbackColors = 'grey';

    const colors = await ImageColors.getColors(image, {
        fallback: 'grey',
    });

    switch (colors.platform) {
        case 'android':
            return colors.dominant ?? fallbackColors;
        
        case 'ios':
            return colors.background ?? fallbackColors;

        default:
            return fallbackColors;
    }


};