class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        let uniqueEmails=new Set();
        for (let i = 0; i < emails.length; i++) {
            let [ local, domain ] = emails[i].split("@");
            local=local.split("+")[0]
            local=local.replaceAll(".","");
            uniqueEmails.add(local+"@"+domain)
        }
     return uniqueEmails.size
    }
}
