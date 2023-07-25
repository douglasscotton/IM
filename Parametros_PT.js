function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

	var pais = getUrlVars()["pais"];
	var TipoProjeto = getUrlVars()["TipoProjeto"];

	if (pais == "Brasil")
	{
		var NUM_DAY_PROD = 21;
		var NUM_HR_PROD = 6.68;

		var CQ_PERCENT = 9 / 100;

	 	var APM_Prep_S = 180120;
	 	var APM_Prep_M = 143647;
	 	var APM_Prep_C = 73787;

		var APM_Scan_PB = 495750;
		var APM_Scan_GR = 347025;

		var APM_IDX = 701400;

		var APM_REC_S = 394608;

		var APM_CQ_IMG = 561120;
		var APM_CQ_MOS = 42084;

		var APM_TIP_1 = 106613;
		var APM_TIP_2 = 84168;
		var APM_TIP_3 = 77154;
		var APM_TIP_4 = 70140;

		var vl_Setup = 14253;

		var vl_comp = 6656.06;
		var vl_ncomp = 1728.22;

	}

// VOLUMES

		if (TipoProjeto == "Recorrente")
	{
		var qtde_mes = parseInt(getUrlVars()["qtde_mes"]);
		var Pr_Volume = parseInt(getUrlVars()["Pr_Volume"]);
		var qtde_pages = parseInt(getUrlVars()["qtde_pages"]);
		var duplex = getUrlVars()["duplex"];

		var price = parseFloat(getUrlVars()["price"]).toFixed(3) * 1;

		var Vl_Paginas_Mes = (Pr_Volume * qtde_pages);
		var Vl_Img_Mes = parseInt((parseInt(Pr_Volume) * parseInt(qtde_pages)) * (1 + (duplex / 100)));
		var qtde_img_doc = parseFloat(parseInt(qtde_pages) * (1 + (duplex / 100)));


		var total_images = parseInt((parseInt(Pr_Volume) * parseInt(qtde_pages)) * (1 + (duplex / 100))) * qtde_mes;
		var fat_Total = parseInt(total_images) * parseFloat(price).toFixed(3);
		var fat_mensal = fat_Total / qtde_mes
		var vol_mensal = parseInt(total_images / qtde_mes)
		var vol_diario = parseInt(vol_mensal / 20)
		var vol_semanal = parseInt(vol_diario * 5)
		var fat_Total_Setup = fat_Total + vl_Setup
	}
	if (TipoProjeto == "Nao%20Recorrente")
	{
		var qtde_mes = parseInt(getUrlVars()["qtde_mes"]);
		var Pr_Volume = parseInt(getUrlVars()["Pr_Volume"]);
		var qtde_pages = parseInt(getUrlVars()["qtde_pages"]);
		var duplex = getUrlVars()["duplex"];

		var price = parseFloat(getUrlVars()["price"]).toFixed(3) * 1;

		var Vl_Paginas_Mes = (Pr_Volume * qtde_pages) / qtde_mes;
		var Vl_Img_Mes = parseInt((parseInt(Pr_Volume) * parseInt(qtde_pages)) * (1 + (duplex / 100))) / qtde_mes;
		var qtde_img_doc = parseInt(parseInt(qtde_pages) * (1 + (duplex / 100)));


		var total_images = parseInt((parseInt(Pr_Volume) * parseInt(qtde_pages)) * (1 + (duplex / 100)));
		var fat_Total = parseInt(total_images) * parseFloat(price).toFixed(3);
		var fat_mensal = fat_Total / qtde_mes
		var vol_mensal = parseInt(total_images / qtde_mes)
		var vol_diario = parseInt(vol_mensal / 20)
		var vol_semanal = parseInt(vol_diario * 5)
		var fat_Total_Setup = fat_Total + vl_Setup
	}


// PREPARACAO

	var type_Prep = getUrlVars()["type_Prep"];

	if (type_Prep == "Simples")
	{
		var type_Prep_Desc = "Documentos em saquinhos ou envelopes com 1-2 grampos/clipes por documento"
		var QTDE_HC_PREP = parseFloat(Vl_Paginas_Mes / APM_Prep_S).toFixed(3);
		var APH_PREP = parseFloat(APM_Prep_S / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);

	}
	if (type_Prep == "Media")
	{
		var type_Prep_Desc = "Documentos em saquinhos ou envelopes com 3-5 grampos/clipes por documento"
		var QTDE_HC_PREP = parseFloat(Vl_Paginas_Mes / APM_Prep_M).toFixed(3);
		var APH_PREP = parseFloat(APM_Prep_M / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
	}
	if (type_Prep == "Complexo")
	{
		var type_Prep_Desc = "Documentos em pastas com Romeo e Julieta  e 1-10 grampos por documento"
		var QTDE_HC_PREP = parseFloat(Vl_Paginas_Mes / APM_Prep_C).toFixed(3);
		var APH_PREP = parseFloat(APM_Prep_C / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
	}

// SCANNER

	var type_Desc = getUrlVars()["type_Desc"];

	if (type_Desc == "Branco%20e%20Preto")
	{
		var QTDE_HC_SCAN = parseFloat(Vl_Paginas_Mes / APM_Scan_PB).toFixed(3);
		var APH_SCAN = parseFloat(APM_Scan_PB / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
	}
	if (type_Desc == "Escala%20de%20Cinza")
	{
		var QTDE_HC_SCAN = parseFloat(Vl_Paginas_Mes / APM_Scan_GR).toFixed(3);
		var APH_SCAN = parseFloat(APM_Scan_GR / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
	}

// CAPTURA

	var qtde_indices = parseInt(getUrlVars()["qtde_indices"]);
	var idx_1_nome = getUrlVars()["idx_1_nome"];
	var idx_1_nc = parseInt(getUrlVars()["idx_1_nc"]);
	var idx_1_tipo = getUrlVars()["idx_1_tipo"];
	var idx_2_nome = getUrlVars()["idx_2_nome"];
	var idx_2_nc = parseInt(getUrlVars()["idx_2_nc"]);
	var idx_2_tipo = getUrlVars()["idx_2_tipo"];
	var idx_3_nome = getUrlVars()["idx_3_nome"];
	var idx_3_nc = parseInt(getUrlVars()["idx_3_nc"]);
	var idx_3_tipo = getUrlVars()["idx_3_tipo"];
	var idx_4_nome = getUrlVars()["idx_4_nome"];
	var idx_4_nc = parseInt(getUrlVars()["idx_4_nc"]);
	var idx_4_tipo = getUrlVars()["idx_4_tipo"];
	var idx_5_nome = getUrlVars()["idx_5_nome"];
	var idx_5_nc = parseInt(getUrlVars()["idx_5_nc"]);
	var idx_5_tipo = getUrlVars()["idx_5_tipo"];

	if (qtde_indices == 1)
	{
		var QTDE_CARAC_DOC = parseInt(idx_1_nc);
	}
	if (qtde_indices == 2)
	{
		var QTDE_CARAC_DOC = parseInt(idx_1_nc + idx_2_nc);
	}
	if (qtde_indices == 3)
	{
		var QTDE_CARAC_DOC = parseInt(idx_1_nc + idx_2_nc + idx_3_nc);
	}
	if (qtde_indices == 4)
	{
		var QTDE_CARAC_DOC = parseInt(idx_1_nc + idx_2_nc + idx_3_nc + idx_4_nc);
	}
	if (qtde_indices == 5)
	{
		var QTDE_CARAC_DOC = parseInt(idx_1_nc + idx_2_nc + idx_3_nc+ idx_4_nc+ idx_5_nc);
	}
	
	var QTDE_HC_IDX = parseFloat(((Vl_Img_Mes / qtde_img_doc) * QTDE_CARAC_DOC) / APM_IDX).toFixed(3);
	var APH_IDX = parseFloat(APM_IDX / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
		
// TIPIFICACAO
	
	var tipifica = getUrlVars()["tipifica"];

	if (tipifica == 0)
	{
		var desc_tipifica = "Este projeto nao contempla tipifica&ccedil;&atilde;o de documentos"
		var QTDE_HC_TIP = 0;
		var APH_TIP = 0;
	}
	if (tipifica == 1)
	{
		var desc_tipifica = "Tipifica&ccedil;&atilde;o de 2 ate 5 tipos documentais"
		var QTDE_HC_TIP = parseFloat(Vl_Img_Mes / APM_TIP_1).toFixed(3);
		var APH_TIP = parseFloat(APM_TIP_1 / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
	}
	if (tipifica == 2)
	{
		var desc_tipifica = "Tipifica&ccedil;&atilde;o de 6 ate 10 tipos documentais"
		var QTDE_HC_TIP = parseFloat(Vl_Img_Mes / APM_TIP_2).toFixed(3);
		var APH_TIP = parseFloat(APM_TIP_2 / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
	}
	if (tipifica == 3)
	{
		var desc_tipifica = "Tipifica&ccedil;&atilde;o de 11 ate 15 tipos documentais"
		var QTDE_HC_TIP = parseFloat(Vl_Img_Mes / APM_TIP_3).toFixed(3);
		var APH_TIP = parseFloat(APM_TIP_3 / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
	}
	if (tipifica == 4)
	{
		var desc_tipifica = "Tipifica&ccedil;&atilde;o de 16 ate 25 tipos documentais"
		var QTDE_HC_TIP = parseFloat(Vl_Img_Mes / APM_TIP_4).toFixed(3);
		var APH_TIP = parseFloat(APM_TIP_4 / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
	}

// CONTROLE DE QUALIDADE

	var QTDE_HC_CQ_IMG = parseFloat(Vl_Img_Mes / APM_CQ_IMG).toFixed(3);
	var APH_CQ_IMG = parseFloat(APM_CQ_IMG / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);

	var QTDE_HC_CQ_MOS = parseFloat((Vl_Img_Mes * CQ_PERCENT) / APM_CQ_MOS).toFixed(3);
	var APH_CQ_MOS = parseFloat(APM_CQ_MOS / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);

// RECOMPOSICAO

	var QTDE_HC_REC = parseFloat(Vl_Paginas_Mes / APM_REC_S).toFixed(3);
	var APH_REC  = parseFloat(APM_REC_S / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);

// TOTAL

	var QTDE_HC_TOT = parseFloat(parseFloat(parseFloat(QTDE_HC_PREP) + parseFloat(QTDE_HC_SCAN) + parseFloat(QTDE_HC_IDX) + parseFloat(QTDE_HC_TIP) + parseFloat(QTDE_HC_CQ_IMG) + parseFloat(QTDE_HC_CQ_MOS) + parseFloat(QTDE_HC_REC)).toFixed(3)).toFixed(3);
	
// FINANCEIRO

	var COST_COMP = parseFloat(vl_comp * QTDE_HC_TOT).toFixed(2);
	var COST_NCOMP = parseFloat(vl_ncomp * QTDE_HC_TOT).toFixed(2);
	var COST_TOTAL = parseFloat(COST_COMP) + parseFloat(COST_NCOMP);
		
	var MARGEM = (parseFloat(fat_mensal) - parseFloat(COST_TOTAL)) / parseFloat(fat_mensal);
	