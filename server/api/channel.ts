import channel from '@/database/chnnel'
export default defineEventHandler( async () => {
    return {
        status: 200,
        data: {
            channel: channel
        }
    }

})
