export default {
  options(h, conf, key) {
    const list = []
    conf.__slot__.options.forEach(item => {
      list.push(<el-tab-pane label={item.label} name={item.name}>
        {item.label}
      </el-tab-pane>)
    })
    return list
  }
}
