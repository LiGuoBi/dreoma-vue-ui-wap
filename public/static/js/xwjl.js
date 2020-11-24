(function() {

	// uuid
	function generateUUID() {
		var d = new Date().getTime()
		if (window.performance && typeof window.performance.now === 'function') {
			d += performance.now() //use high-precision timer if available
		}
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = (d + Math.random() * 16) % 16 | 0
			d = Math.floor(d / 16)
			return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16)
		})
		return uuid
	}
	// 获取操作系统信息 
	function getOsInfo() {
		var userAgent = navigator.userAgent.toLowerCase()
		var name = 'Unknown'
		var version = 'Unknown'
		if (userAgent.indexOf('win') > -1) {
			name = 'Windows'
			if (userAgent.indexOf('windows nt 5.0') > -1) {
				version = 'Windows 2000'
			} else if (userAgent.indexOf('windows nt 5.1') > -1 || userAgent.indexOf('windows nt 5.2') > -1) {
				version = 'Windows XP'
			} else if (userAgent.indexOf('windows nt 6.0') > -1) {
				version = 'Windows Vista'
			} else if (userAgent.indexOf('windows nt 6.1') > -1 || userAgent.indexOf('windows 7') > -1) {
				version = 'Windows 7'
			} else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows 8') > -1) {
				version = 'Windows 8'
			} else if (userAgent.indexOf('windows nt 6.3') > -1) {
				version = 'Windows 8.1'
			} else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows nt 10.0') > -1) {
				version = 'Windows 10'
			} else {
				version = 'Unknown'
			}
		} else if (userAgent.indexOf('iphone') > -1) {
			name = 'Iphone'
		} else if (userAgent.indexOf('mac') > -1) {
			name = 'Mac'
		} else if (userAgent.indexOf('x11') > -1 || userAgent.indexOf('unix') > -1 || userAgent.indexOf('sunname') > -1 ||
			userAgent.indexOf('bsd') > -1) {
			name = 'Unix'
		} else if (userAgent.indexOf('linux') > -1) {
			if (userAgent.indexOf('android') > -1) {
				name = 'Android'
			} else {
				name = 'Linux'
			}
		} else {
			name = 'Unknown'
		}
		return {
			name,
			version
		}
	}
	// 浏览器
	function getBrowser() {
		function _mime(option, value) {
			var mimeTypes = navigator.mimeTypes
			for (var mt in mimeTypes) {
				if (mimeTypes[mt][option] === value) {
					return true
				}
			}
			return false
		}
		let ua = navigator.userAgent.toLocaleLowerCase()
		let browserType = null
		if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
			browserType = 'IE'
		} else if (ua.match(/firefox/) != null) {
			browserType = 'firefox'
		} else if (ua.match(/ucbrowser/) != null) {
			browserType = 'UC'
		} else if (ua.match(/opera/) != null || ua.match(/opr/) != null) {
			browserType = 'opera'
		} else if (ua.match(/bidubrowser/) != null) {
			browserType = 'baidu'
		} else if (ua.match(/metasr/) != null) {
			browserType = 'sougou'
		} else if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
			browserType = 'QQ'
		} else if (ua.match(/maxthon/) != null) {
			browserType = 'maxthon'
		} else if (ua.match(/chrome/) != null) {
			var is360 = _mime('type', 'application/vnd.chromium.remoting-viewer')
			if (is360) {
				browserType = '360'
			} else {
				browserType = 'chrome'
			}
		} else if (ua.match(/safari/) != null) {
			browserType = 'Safari'
		} else {
			browserType = 'others'
		}
		return browserType
	}

	let obj = {
		uuid: generateUUID(),
		src: window.screen.width + 'x' + window.screen.height,
		os: getOsInfo(),
		browser: getBrowser(),
		color: window.screen.colorDepth
	}
	console.log(obj)

	// 滚动行为记录
	let timerId = 0
	// let currentUrl = '';
	// let currentPlate = 0;
	function scrollRecord() {
		clearTimeout(timerId)
		timerId = setTimeout(function() {
			// url = window.location.href
			// if (currentUrl !== url) {
			// 	currentUrl = url;
			// 	console.log('页面切换')
			// 	return
			// }

			// 板块列表 Object
			let plateList = []
			document.querySelectorAll('[data-rs-plate]').forEach(el => {
				plateList.push({
					el: el, // 元素
					name: el.getAttribute('data-rs-plate'), // 自定义属性值
					height: el.offsetHeight, // 元素高度
					top: el.offsetTop // 元素距离文档顶端
				})
			})

			// 有板块才计算滚动位置
			if (plateList.length > 0) {
				let scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 滚动高度
				let winh = window.innerHeight // 窗口高度
				let middle = scrollTop + (winh / 2) // 滚动高度 + 窗口高度 = 窗口中间距离顶部的距离
				// 滚动条在顶部
				if (scrollTop == 0 && middle > (plateList[0].height + plateList[0].top)) {
					console.log({
						title: plateList[0].name,
						time: Date.now(),
						scrollTop: scrollTop
					})
					return
				}

				if (scrollTop == 0) return
				// 滚动条在底部
				let lastPlate = plateList[plateList.length - 1]
				if (scrollTop + winh == document.body.offsetHeight && (lastPlate.height + lastPlate.top) > middle) {
					console.log({
						title: lastPlate.name,
						time: Date.now(),
						scrollTop: scrollTop
					})
					return
				}
				plateList.forEach((item, index) => {
					// 滚动距离 >= 元素距离文档顶端 && 滚动距离 <= (元素高度 + 元素距离文档顶端) 表示当前显示板块
					if (middle >= item.top && middle <= (item.height + item.top)) {
						// console.log(middle)
						console.log({
							title: item.name,
							time: Date.now(),
							scrollTop: scrollTop
						})
					}
				})
			}
		}, 500)
	}
	
	scrollRecord()
	// 滚动事件
	window.onscroll = function() {
		scrollRecord()
	}

	// 动态绑定点击事件
	document.addEventListener('click', function(e) {
		// let attrVal = e.target.getAttribute('data-rs-click')
		let attrVal = getClickDomAttr(e.target, 'data-rs-click')
		if (attrVal !== null) { // 判断是否是点击了有 data-rs-click 属性的元素
			console.log({
				type: attrVal,
				time: Date.now()
			})
		}
	})
	// 递归查找指定属性，查找到body没有返回null
	function getClickDomAttr(element, attr) {
		// 有指定属性返回属性值
		if (element.hasAttribute(attr)) {
			return element.getAttribute(attr)
		} else {
			// 查找到body返回null
			if (element === document.body) {
				return null
			} else {
				// 没有指定属性父节点继续查找
				return getClickDomAttr(element.parentNode, attr)
			}
		}
	}
})()
