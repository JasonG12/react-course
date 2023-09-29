import noImage from '../assets/no-image-placeholder.webp'

const getCroppedImageUrl = (url: string, height: number,width: number )=> {
    if (!url) return noImage;
    const index = url.indexOf('media/') + 'media/'.length;    
    return url.slice(0,index) + `crop/${height}/${width}/` + url.slice(index)
}

export default getCroppedImageUrl;