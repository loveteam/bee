/**
 * Created by Guangshan on 2015/7/18.
 */
var express = require('express');
var router = express.Router();

//�˴����õ�express.Router()���ٵ���get��������������Router��ע����������󣬶��ǽ���������������Ϊ
//�ö���(router����)����Ϊ�����ã��ǿ��Դ���http�������� express.Router()ֻ��Ϊ��ȡ�����������Ȼ��Ϊ�ö�������һЩ����������
//����Ҫʹ����ķ���ȷʵ���Դ������󣬻���Ҫ��app.jsע���ַ��Ӧ�Ĵ���ģ�飬����
//var angular_test = require('./routes/test/angular');
//app.use('/test', angular_test);

//requireΪһ��Ŀ¼��ȡ����ʲô��Ŀ¼�µ�index.jsģ����

router.get('/', function(req, res, next) {
    res.render('test/angular',{title:"test"});//��ģ��������Ⱦ��һ�������ṩ�ĵ�ַ��ģ�壬�ڶ���Ϊģ�����ʹ�õĲ���
});

module.exports = router;//nodejsģ�黯��ʹ��require("·��")����ȡ����ģ�飬��router����