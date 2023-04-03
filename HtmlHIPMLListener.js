import HIPMLListener from './HIPMLListener.js';

export default class HtmlHIPMLListener extends HIPMLListener {
  constructor(res) {
    super();
    this.res = res;
  }

  // Enter a parse tree produced by HIPMLParser#policy.
  enterPolicy(ctx) {
    this.res.write('<h1>Policy</h1>');
  }

  // Exit a parse tree produced by HIPMLParser#policy.
  exitPolicy(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#policySection.
  enterPolicySection(ctx) {
    this.res.write(`<h2>${ctx.getText()}</h2>`);
  }

  // Exit a parse tree produced by HIPMLParser#policySection.
  exitPolicySection(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#attributesSection.
  enterAttributesSection(ctx) {
    this.res.write(`<h3>${ctx.getText()}</h3>`);
  }

  // Exit a parse tree produced by HIPMLParser#attributesSection.
  exitAttributesSection(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#attributesBody.
  enterAttributesBody(ctx) {
    this.res.write('<ul>');
  }

  // Exit a parse tree produced by HIPMLParser#attributesBody.
  exitAttributesBody(ctx) {
    this.res.write('</ul>');
  }

  // Enter a parse tree produced by HIPMLParser#attribute.
  enterAttribute(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#attribute.
  exitAttribute(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#attributeString.
  enterAttributeString(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#attributeString.
  exitAttributeString(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#attributeDate.
  enterAttributeDate(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#attributeDate.
  exitAttributeDate(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#attributeNumber.
  enterAttributeNumber(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#attributeNumber.
  exitAttributeNumber(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#attributeAmount.
  enterAttributeAmount(ctx) {
    this.res.write(`<li>HELLO ${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#attributeAmount.
  exitAttributeAmount(ctx) {
    this.res.write('<hr/>');
    this.res.write(`<li>HELLO ${ctx.getText()}</li>`)
  }

  // Enter a parse tree produced by HIPMLParser#attributePercentage.
  enterAttributePercentage(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#attributePercentage.
  exitAttributePercentage(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#coverageSection.
  enterCoverageSection(ctx) {
    this.res.write(`<h3>${ctx.getText()}</h3>`);
  }

  // Exit a parse tree produced by HIPMLParser#coverageSection.
  exitCoverageSection(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#coverageBody.
  enterCoverageBody(ctx) {
    this.res.write('<ul>');
  }

  // Exit a parse tree produced by HIPMLParser#coverageBody.
  exitCoverageBody(ctx) {
    this.res.write('</ul>');
  }

  // Enter a parse tree produced by HIPMLParser#coverage.
  enterCoverage(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#coverage.
  exitCoverage(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#coverageString.
  enterCoverageString(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#coverageString.
  exitCoverageString(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#coverageDate.
  enterCoverageDate(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#coverageDate.
  exitCoverageDate(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#coverageNumber.
  enterCoverageNumber(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#coverageNumber.
  exitCoverageNumber(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#coverageAmount.
  enterCoverageAmount(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#coverageAmount.
  exitCoverageAmount(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#coveragePercentage.
  enterCoveragePercentage(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#coveragePercentage.
  exitCoveragePercentage(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#exclusionsSection.
  enterExclusionsSection(ctx) {
    this.res.write(`<h3>${ctx.getText()}</h3>`);
  }

  // Exit a parse tree produced by HIPMLParser#exclusionsSection.
  exitExclusionsSection(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#exclusionsBody.
  enterExclusionsBody(ctx) {
    this.res.write('<ul>');
  }

  // Exit a parse tree produced by HIPMLParser#exclusionsBody.
  exitExclusionsBody(ctx) {
    this.res.write('</ul>');
  }

  // Enter a parse tree produced by HIPMLParser#exclusion.
  enterExclusion(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#exclusion.
  exitExclusion(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#exclusionString.
  enterExclusionString(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#exclusionString.
  exitExclusionString(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#exclusionDate.
  enterExclusionDate(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#exclusionDate.
  exitExclusionDate(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#exclusionNumber.
  enterExclusionNumber(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#exclusionNumber.
  exitExclusionNumber(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#exclusionAmount.
  enterExclusionAmount(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#exclusionAmount.
  exitExclusionAmount(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#exclusionPercentage.
  enterExclusionPercentage(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#exclusionPercentage.
  exitExclusionPercentage(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#limitationsSection.
  enterLimitationsSection(ctx) {
    this.res.write(`<h3>${ctx.getText()}</h3>`);
  }

  // Exit a parse tree produced by HIPMLParser#limitationsSection.
  exitLimitationsSection(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#limitationsBody.
  enterLimitationsBody(ctx) {
    this.res.write('<ul>');
  }

  // Exit a parse tree produced by HIPMLParser#limitationsBody.
  exitLimitationsBody(ctx) {
    this.res.write('</ul>');
  }

  // Enter a parse tree produced by HIPMLParser#limitation.
  enterLimitation(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#limitation.
  exitLimitation(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#limitationString.
  enterLimitationString(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#limitationString.
  exitLimitationString(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#limitationDate.
  enterLimitationDate(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#limitationDate.
  exitLimitationDate(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#limitationNumber.
  enterLimitationNumber(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#limitationNumber.
  exitLimitationNumber(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#limitationAmount.
  enterLimitationAmount(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#limitationAmount.
  exitLimitationAmount(ctx) {
    this.res.write('<hr/>');
  }

  // Enter a parse tree produced by HIPMLParser#limitationPercentage.
  enterLimitationPercentage(ctx) {
    this.res.write(`<li>${ctx.getText()}</li>`);
  }

  // Exit a parse tree produced by HIPMLParser#limitationPercentage.
  exitLimitationPercentage(ctx) {
    this.res.write('<hr/>');
  }
}
