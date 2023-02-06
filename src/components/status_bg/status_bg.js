function status_bg(bgColor) {
        plus.navigator.setStatusBarBackground(bgColor);   //设置状态栏颜色
        plus.navigator.setStatusBarStyle('dark');//设置状态字体颜色  只能设置黑或白   light -> 白色  dark -> 黑色
}

export default status_bg
