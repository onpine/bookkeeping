/*
 Navicat Premium Data Transfer

 Source Server         : gqSQL
 Source Server Type    : MySQL
 Source Server Version : 50731
 Source Host           : 112.124.30.43:3306
 Source Schema         : cashbook

 Target Server Type    : MySQL
 Target Server Version : 50731
 File Encoding         : 65001

 Date: 25/06/2021 15:52:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cash_info
-- ----------------------------
DROP TABLE IF EXISTS `cash_info`;
CREATE TABLE `cash_info`  (
  `uid` varchar(12) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '用户id',
  `cid` bigint(20) NOT NULL AUTO_INCREMENT,
  `type` int(2) NOT NULL COMMENT '账目类型',
  `amount` int(10) NOT NULL,
  `remarks` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  `balance` int(10) NOT NULL COMMENT '余额',
  `stamp` varchar(15) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`cid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cash_info
-- ----------------------------

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info`  (
  `uid` varchar(12) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '用户ID',
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `sex` varchar(1) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `age` varchar(4) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `bgimage` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '头像',
  `noteList` mediumtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('15800000000', '123456', NULL, NULL, NULL, NULL, '');
INSERT INTO `user_info` VALUES ('15893680400', '123456', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user_info` VALUES ('15893680482', '123456', NULL, NULL, NULL, NULL, '[{\"type\":0,\"amount\":\"2\",\"category\":1,\"message\":\"\",\"time\":\"2021年04月25日 18:36\",\"stamp\":1619346975812},{\"type\":0,\"amount\":\"5\",\"category\":0,\"message\":\"\",\"time\":\"2021年04月25日 19:27\",\"stamp\":1619350073315},{\"type\":0,\"amount\":\"6\",\"category\":2,\"message\":\"\",\"time\":\"2021年04月28日 11:34\",\"stamp\":1619580879725},{\"type\":0,\"amount\":\"7\",\"category\":1,\"message\":\"捞面\",\"time\":\"2021年04月28日 20:38\",\"stamp\":1619613528688},{\"type\":1,\"amount\":\"0.2\",\"category\":1,\"message\":\"\",\"time\":\"2021年04月28日 21:15\",\"stamp\":1619615748225}]');
INSERT INTO `user_info` VALUES ('15893680486', '123456', NULL, NULL, NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
