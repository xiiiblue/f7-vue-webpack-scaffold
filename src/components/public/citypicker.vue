<template>
  <f7-input type="text" placeholder="请选择地市" id="picker-address" @change='citypickerEmmit'></f7-input>
</template>

<script>
  import _ from 'lodash'
  import util from '../../util'
  import {mapState} from 'vuex'

  export default {
    props: ['eparchyCode'],
    data() {
      return {
        eparchyOption: {
          济南市: ['历下区', '市中区', '槐荫区', '天桥区', '历城区', '长清区', '平阴县', '济阳县', '商河县', '章丘市', '高新区', '其它'],
          青岛市: ['市南区', '市北区', '黄岛区', '崂山区', '李沧区', '城阳区', '胶州市', '即墨市', '平度市', '莱西市', '其它'],
          淄博市: ['淄川区', '张店区', '博山区', '临淄区', '周村区', '桓台县', '高青县', '沂源县', '其它'],
          枣庄市: ['市中区', '薛城区', '峄城区', '台儿庄区', '山亭区', '滕州市', '其它'],
          东营市: ['东营区', '河口区', '垦利县', '利津县', '广饶县', '其它'],
          烟台市: ['芝罘区', '福山区', '牟平区', '莱山区', '长岛县', '龙口市', '莱阳市', '莱州市', '蓬莱市', '招远市', '栖霞市', '海阳市', '其它'],
          潍坊市: ['潍城区', '寒亭区', '坊子区', '奎文区', '临朐县', '昌乐县', '青州市', '诸城市', '寿光市', '安丘市', '高密市', '昌邑市', '其它'],
          济宁市: ['任城区', '兖州区', '微山县', '鱼台县', '金乡县', '嘉祥县', '汶上县', '泗水县', '梁山县', '曲阜市', '邹城市', '其它'],
          泰安市: ['泰山区', '岱岳区', '宁阳县', '东平县', '新泰市', '肥城市', '其它'],
          威海市: ['环翠区', '文登区', '荣成市', '乳山市', '其它'],
          日照市: ['东港区', '岚山区', '五莲县', '莒县', '其它'],
          莱芜市: ['莱城区', '钢城区', '其它'],
          临沂市: ['兰山区', '罗庄区', '河东区', '沂南县', '郯城县', '沂水县', '兰陵县', '费县', '平邑县', '莒南县', '蒙阴县', '临沭县', '其它'],
          德州市: ['德城区', '陵城区', '宁津县', '庆云县', '临邑县', '齐河县', '平原县', '夏津县', '武城县', '乐陵市', '禹城市', '其它'],
          聊城市: ['东昌府区', '阳谷县', '莘县', '茌平县', '东阿县', '冠县', '高唐县', '临清市', '其它'],
          滨州市: ['滨城区', '沾化区', '惠民县', '阳信县', '无棣县', '博兴县', '邹平县', '其它'],
          菏泽市: ['牡丹区', '曹县', '单县', '成武县', '巨野县', '郓城县', '鄄城县', '定陶县', '东明县', '其它']
        },
      }
    },
    computed: {
      ...mapState({
        env: state => state.env,
      }),
    },
    mounted() {
      util.log('citypicker初始化，eparchyCode = ', this.eparchyCode)
      let eparchyOption = this.eparchyOption
      let eparchyName
      if (this.env.eparchyMap.hasOwnProperty(this.eparchyCode)) {
        eparchyName = this.env.eparchyMap[this.eparchyCode]
      } else {
        eparchyName = _.keys(eparchyOption)[0]
      }

      this.$f7.picker({
        input: '#picker-address',
        toolbarCloseText: '确定',
        value: [eparchyName, ''],
        cols: [{
          values: _.keys(eparchyOption),
          onChange: function (picker, key) {
            if (picker.cols[1].replaceValues) {
              picker.cols[1].replaceValues(eparchyOption[key])
            }
          },
        }, {
          values: eparchyOption[eparchyName],
          width: 160,
        }],
      })
    },
    methods: {
      citypickerEmmit() {
        let val = window.Dom7('#picker-address').val()
        this.$emit('citypickerEmmit', val)
      },
    }
  }
</script>
