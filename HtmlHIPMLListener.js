import HIPMLListener from './HIPMLListener.js';

export default class HtmlHIPMLListener extends HIPMLListener {

  constructor(res) {
    super();
    this.res = res;
  }

	// Enter a parse tree produced by HIPMLParser#policy.
	enterPolicy(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#policy.
	exitPolicy(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#policySection.
	enterPolicySection(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#policySection.
	exitPolicySection(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#attributesSection.
	enterAttributesSection(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#attributesSection.
	exitAttributesSection(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#attributesBody.
	enterAttributesBody(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#attributesBody.
	exitAttributesBody(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#attribute.
	enterAttribute(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#attribute.
	exitAttribute(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#attributeString.
	enterAttributeString(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#attributeString.
	exitAttributeString(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#attributeDate.
	enterAttributeDate(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#attributeDate.
	exitAttributeDate(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#attributeNumber.
	enterAttributeNumber(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#attributeNumber.
	exitAttributeNumber(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#coverageSection.
	enterCoverageSection(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#coverageSection.
	exitCoverageSection(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#coverageBody.
	enterCoverageBody(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#coverageBody.
	exitCoverageBody(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#coverageItem.
	enterCoverageItem(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#coverageItem.
	exitCoverageItem(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#coverageItemName.
	enterCoverageItemName(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#coverageItemName.
	exitCoverageItemName(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#coverageItemDetails.
	enterCoverageItemDetails(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#coverageItemDetails.
	exitCoverageItemDetails(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#coverageItemLimit.
	enterCoverageItemLimit(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#coverageItemLimit.
	exitCoverageItemLimit(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#coverageItemCondition.
	enterCoverageItemCondition(ctx) {
    console.log("\nITEM CONDITION\n", ctx.getText());
	}

	// Exit a parse tree produced by HIPMLParser#coverageItemCondition.
	exitCoverageItemCondition(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#exclusionsSection.
	enterExclusionsSection(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#exclusionsSection.
	exitExclusionsSection(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#exclusionBody.
	enterExclusionBody(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#exclusionBody.
	exitExclusionBody(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#exclusionItem.
	enterExclusionItem(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#exclusionItem.
	exitExclusionItem(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#exclusionItemCondition.
	enterExclusionItemCondition(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#exclusionItemCondition.
	exitExclusionItemCondition(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#switchStmt.
	enterSwitchStmt(ctx) {
    console.log("\nSWITCH STATEMENT\n", ctx.getText());
	}

	// Exit a parse tree produced by HIPMLParser#switchStmt.
	exitSwitchStmt(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#switchExpr.
	enterSwitchExpr(ctx) {
    console.log("\nSWITCH EXPR\n", ctx.getText());
	}

	// Exit a parse tree produced by HIPMLParser#switchExpr.
	exitSwitchExpr(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#switchDefaultExpr.
	enterSwitchDefaultExpr(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#switchDefaultExpr.
	exitSwitchDefaultExpr(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#booleanExpr.
	enterBooleanExpr(ctx) {
    console.log("\nBOOLEAN EXPR\n", ctx.getText());
	}

	// Exit a parse tree produced by HIPMLParser#booleanExpr.
	exitBooleanExpr(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#booleanGroupExprStmt.
	enterBooleanGroupExprStmt(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#booleanGroupExprStmt.
	exitBooleanGroupExprStmt(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#comparatorExpr.
	enterComparatorExpr(ctx) {
    console.log("\nCOMPARATOR EXPR\n", ctx.getText());
	}

	// Exit a parse tree produced by HIPMLParser#comparatorExpr.
	exitComparatorExpr(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#groupFnExpr.
	enterGroupFnExpr(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#groupFnExpr.
	exitGroupFnExpr(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#numberExpr.
	enterNumberExpr(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#numberExpr.
	exitNumberExpr(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#listOpExpr.
	enterListOpExpr(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#listOpExpr.
	exitListOpExpr(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#list.
	enterList(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#list.
	exitList(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#listExpr.
	enterListExpr(ctx) {
    console.log("\nenterListExpr\n", ctx.getText());
	}

	// Exit a parse tree produced by HIPMLParser#listExpr.
	exitListExpr(ctx) {

	}


	// Enter a parse tree produced by HIPMLParser#dateExpr.
	enterDateExpr(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#dateExpr.
	exitDateExpr(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#variable.
	enterVariable(ctx) {
    console.log("\nVARIABLE\n", ctx.getText());
	}

	// Exit a parse tree produced by HIPMLParser#variable.
	exitVariable(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#diagnosis.
	enterDiagnosis(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#diagnosis.
	exitDiagnosis(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#procedure.
	enterProcedure(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#procedure.
	exitProcedure(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#service.
	enterService(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#service.
	exitService(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#amount.
	enterAmount(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#amount.
	exitAmount(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#date.
	enterDate(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#date.
	exitDate(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#number.
	enterNumber(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#number.
	exitNumber(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#string.
	enterString(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#string.
	exitString(ctx) {
	}


	// Enter a parse tree produced by HIPMLParser#bool.
	enterBool(ctx) {
	}

	// Exit a parse tree produced by HIPMLParser#bool.
	exitBool(ctx) {
	}



}
