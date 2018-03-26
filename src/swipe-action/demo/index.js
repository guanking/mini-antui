

Page({
  data: {
    right1: [{'type': 'delete', 'text': '删除'}],
    right2: [{'type': 'edit', 'text': '修改'}, {'type': 'delete', 'text': '删除'}],
  },
  onClickRightItem(e) {
    my.alert({
      content: `${e.index}-${e.extra}-${JSON.stringify(e.detail)}`,
    });
  },
  onItemClick(e) {
    my.alert({
      content: `dada${e.index}`,
    });
  }
});
