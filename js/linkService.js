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
                    "url":          "http://stamps.org",
                    "expanded":     false
                },
                {
                    "title":        "American Air Mail Society",
                    "description":  "The world's largest and the second oldest aerophilatelic society",
                    "about":        "The American Air Mail Society (AAMS) is the second oldest aerophilatelic society in the world., presently with about 1000 members world-wide. It is a non-profit organization, qualified under the provisions of Section 501(c)(3) of the U.S. Internal Revenue Code as tax-exempt",
                    "imageSrc":     "assets/img/logos/AirMailSociety.png",
                    "url":          "http://www.americanairmailsociety.org/",
                    "expanded":     false
                },
                {
                    "title":        "Council of Northern California Philatelic Societies",
                    "description":  "Society that develops & preserves philatelic clubs, societies & shows in Northern California",
                    "about":        "The Council of Northern California Philatelic Societies has been instrumental in the development and preservation of philatelic clubs, societies and shows in Northern California since 1940",
                    "imageSrc":     "assets/img/logos/CNCPS-LOG.jpg",
                    "url":          "http://norcalstamps.org/",
                    "expanded":     false
                }
            ]
        },
        {
            "category":     "Dealers and Sales",
            "links":        [
                {
                    "title":        "National Stamp Dealer's Association",
                    "description":  "Meet NSDA dealers and find out about stamps and cover collecting. ",
                    "about":        "The National Stamp Dealers Association was founded in 1995 to join small and large stamp dealerships together in a friendly organization with reasonable dues and membership requirements. The primary goals of the NSDA include development and maintenance of a high standard of ethical dealings between dealers and collectors and provision of ongoing information and support to assist members improve and grow their philatelic businesses.",
                    "imageSrc":     "assets/img/logos/nsdalogo-small-trans.gif",
                    "url":          "http://www.nsdainc.org/",
                    "expanded":     false
                }
            ]
        },
        {    
            "category":     "News & Informational",
            "links":        [
                {
                    "title":        "Linn's Stamp News",
                    "description":  "Online version of the weekly stamp news magazine",
                    "about":        "Linn's Stamp News is an American weekly newspaper for stamp collectors. It is published by Amos Media Co., which also publishes the Scott Standard Postage Stamp Catalogue, the Scott Specialized Catalogue of United States Stamps and Covers, and the Scott Classic Specialized Catalogue of Stamps and Covers 1840-1940",
                    "imageSrc":     "assets/img/logos/linnsLogo.png",
                    "url":          "https://www.linns.com/",
                    "imageHook":    "linnsStampNews",
                    "expanded":     false
                },
                {
                    "title":        "Philately News",
                    "description":  "Provides news about latest stamp issues, philatelic exhibitions and shows worldwide",
                    "about":        "Philatelynews is a community for people called “Philatelists” who share the common interest of stamp collecting.Philatelynews provides latest stamps news, exhibition news, auction info, Club news and other philately updates to the collectors, helping to grow their collection",
                    "imageSrc":     "assets/img/logos/philatelyNews.png",
                    "url":          "http://philatelynews.com",
                    "expanded":     false
                },
                {
                    "title":        "PositivelyPostal",
                    "description":  "Your daily dose of stamps and mailart",
                    "about":        "Displays examples of postal culture from Great Britain and other nations. Includes a timeline and a photo gallery",
                    "imageSrc":     "assets/img/logos/Positively-Postal.png",
                    "url":          "http://positivelypostal.com/",
                    "expanded":     false
                }
            ]
        },
        {
            "category":     "Authentication and Expertizing",
            "links":        [
                {
                    "title":        "The Philatelic Foundation",
                    "description":  "Foundation renowned for their expertise in stamps and postal history",
                    "about":        "Their reference collection is among the finest assemblages of philatelic material in the world. In addition, the Philatelic Foundation has over 5,000 reference works including research notes and correspondence of Stanley Ashbrook, photographic records of major specialized collections and auction catalogues from around the world. Last, but certainly not least, is a photographic record of each of the over 500,000 items that we have certified over the years.",
                    "imageSrc":     "assets/img/logos/philatelicFoundation.png",
                    "url":          "http://www.philatelicfoundation.org/",
                    "imageHook":    "americanPhilatelicFoundation",
                    "expanded":     false
                }
            ]
        },
        {
            "category":     "Research and Education",
            "links":        [
                {
                    "title":        "ISWSC Stamp Identifier",
                    "description":  "World's largest philatelic group for beginners, intermediate and advanced worldwide stamp collectors",
                    "about":        "The International Society of Worldwide Stamp Collectors serves the interests of all worldwide collectors. It strives to promote the fun and fascination of worldwide stamp collecting to young and old alike, and has an active outreach program serving youth, their leaders and beginners of all ages",
                    "imageSrc":     "assets/img/logos/iswsclgs.png",
                    "url":          "http://www.iswsc.org/iswsc_identifier.html",
                    "expanded":     false
                },
                {
                    "title":        "Stamp World Catalogue",
                    "description":  "Largest, most complete and updated online stamp catalogue in the world",
                    "about":        "StampWorld.com is a global development made by people from all over the world. The original idea was developed by a small group of stamp collectors. The results of years of work are now finally online and available to you",
                    "imageSrc":     "assets/img/logos/stampworld-logo.png",
                    "url":          "http://www.stampworld.com/en_US/maps/Europe/",
                    "expanded":     false
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
                    "url":          "http://www.westpex.com/",
                    "expanded":     false
                },
                {
                    "title":        "Filatelic Fiesta",
                    "description":  "",
                    "about":        "",
                    "imageSrc":     "assets/img/logos/fiesta-logo.png",
                    "url":          "https://filatelicfiesta.wordpress.com/",
                    "expanded":     false
                },
                {
                    "title":        "NOVAPEX",
                    "description":  "",
                    "about":        "",
                    "imageSrc":     "",
                    "url":          "./novapex",
                    "expanded":     false
                }
            ]
        }
    ];
      

    var that = this;
 

    //  USPS ebay site   (ebay/usps?)
    // united nations philatelic
    // american stamp dealer association
    // BNAPS


}]);