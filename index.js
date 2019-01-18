export function pathToBase64(path) {
    return new Promise(function(resolve, reject) {
        if (typeof window === 'object' && 'document' in window) {
            var canvas = document.createElement('canvas')
            var c2x = canvas.getContext('2d')
            var img = new Image
            img.onload = function() {
                canvas.width = img.width
                canvas.height = img.height
                c2x.drawImage(img, 0, 0)
                resolve(canvas.toDataURL())
            }
            img.onerror = reject
            img.src = path
            return
        }
        if (typeof plus === 'object') {
            var bitmap = new plus.nativeObj.Bitmap('bitmap' + Date.now())
            bitmap.load(path, function() {
                try {
                    var base64 = bitmap.toBase64Data()
                } catch (error) {
                    reject(error)
                }
                bitmap.clear()
                resolve(base64)
            }, function(error) {
                bitmap.clear()
                reject(error)
            })
            return
        }
        if (typeof wx === 'object' && wx.canIUse('openBluetoothAdapter')) {
            wx.getFileSystemManager().readFile({
                filePath: path,
                encoding: 'base64',
                success: function(res) {
                    resolve('data:image/png;base64,' + res.data)
                },
                fail: function(error) {
                    reject(error)
                }
            })
            return
        }
        reject(new Error('not support'))
    })
}