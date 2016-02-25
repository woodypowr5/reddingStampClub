app.service("linkService", ['$rootScope', function($rootScope){
    "use strict";
      
    this.links = [
        {
            "category":     "National and Regional Societies",
            "links":        [
                {
                    "title":        "American Philiatelic Society",
                    "description":  "National stamp collecting organization's website provides information about membership, expertizing services, sales circuits, and local clubs",
                    "about":        "With nearly 32,000 members in more than 110 countries, the APS is the largest, non-profit organization for stamp collectors in the world. Founded in 1886, the APS serves collectors, educators, postal historians, and the general public by providing a wide variety of programs and services",
                    "imageSrc":     "assets/img/logos/americanPhilatelicSociety.png",
                    "url":          "http://stamps.org/Home/"
                },
                {
                    "title":        "American Air Mail Society",
                    "description":  "The world's largest and the second oldest aerophilatelic society",
                    "about":        "The American Air Mail Society (AAMS) is the second oldest aerophilatelic society in the world., presently with about 1000 members world-wide. It is a non-profit organization, qualified under the provisions of Section 501(c)(3) of the U.S. Internal Revenue Code as tax-exempt",
                    "imageSrc":     "assets/img/logos/AirMailSociety.png",
                    "url":          "http://www.americanairmailsociety.org/"
                },
                {
                    "title":        "Council of Northern California Philatelic Societies",
                    "description":  "Society that develops & preserves philatelic clubs, societies & shows in Northern California",
                    "about":        "The Council of Northern California Philatelic Societies has been instrumental in the development and preservation of philatelic clubs, societies and shows in Northern California since 1940",
                    "imageSrc":     "assets/img/logos/CNCPS-LOG.jpg",
                    "url":          "http://norcalstamps.org/"
                }
            ]
        },
        {
            "category":     "Dealers and Sales",
            "links":        [
                {
                    "title":        "National Stamp Dealer's Association",
                    "description":  "",
                    "about":        "",
                    "imageSrc":     "assets/img/logos/nsdalogo-small-trans.gif",
                    "url":          "http://www.nsdainc.org/"
                }
            ]
        },
        {    
            "category":     "News & Informational",
            "links":        [
                {
                    "title":        "Linn's Stamp News",
                    "description":  "",
                    "about":        "",
                    "imageSrc":     "assets/img/logos/linnsLogo.png",
                    "url":          "https://www.linns.com/",
                    "imageHook":    "linnsStampNews"
                },
                {
                    "title":        "PhilatelyNews",
                    "description":  "",
                    "about":        "",
                    "imageSrc":     "assets/img/logos/philatelyNews.png",
                    "url":          "http://philatelynews.com"
                },
                {
                    "title":        "PositivelyPostal",
                    "description":  "",
                    "about":        "",
                    "imageSrc":     "assets/img/logos/Positively-Postal.png",
                    "url":          "http://positivelypostal.com/"
                }
            ]
        },
        {
            "category":     "Authentication and Expertizing",
            "links":        [
                {
                    "title":        "The Philatelic Foundation",
                    "description":  "",
                    "about":        "",
                    "imageSrc":     "assets/img/logos/philatelicFoundation.png",
                    "url":          "http://www.philatelicfoundation.org/",
                    "imageHook":    "americanPhilatelicFoundation"
                }
            ]
        },
        {
            "category":     "Research and Education",
            "links":        [
                {
                    "title":        "Western Philatelic Library",
                    "description":  "",
                    "about":        "",
                    "imageSrc":     "assets/img/logos/westernPhilatelyLibrary.gif",
                    "url":          "http://www.fwpl.org/"
                },
                {
                    "title":        "ISWSC Stamp Identifier",
                    "description":  "",
                    "about":        "",
                    "imageSrc":     "assets/img/logos/iswsclgs.png",
                    "url":          "http://www.iswsc.org/iswsc_identifier.html"
                },
                {
                    "title":        "Stamp World Catalogue",
                    "description":  "",
                    "about":        "",
                    "imageSrc":     "assets/img/logos/stampworld-logo.png",
                    "url":          "http://www.stampworld.com/en_US/maps/Europe/"
                }
            ]
        },
        {
            "category":     "Exhibitions",
            "links":        [
                {
                    "title":        "WESTPEX",
                    "description":  "",
                    "about":        "",
                    "imageSrc":     "assets/img/logos/westpex16.png",
                    "url":          "http://www.westpex.com/"
                },
                {
                    "title":        "Filatelic Fiesta",
                    "description":  "",
                    "about":        "",
                    "imageSrc":     "assets/img/logos/fiesta-logo.png",
                    "url":          "https://filatelicfiesta.wordpress.com/"
                },
                {
                    "title":        "NOVAPEX",
                    "description":  "",
                    "about":        "",
                    "imageSrc":     "",
                    "url":          "./novapex"
                }
            ]
        }
    ];
      

    var that = this;
 
}]);